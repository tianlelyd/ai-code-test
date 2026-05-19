import math
import os
import random

import bpy
from mathutils import Vector


ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "outputs")
BLEND_PATH = os.path.join(OUT_DIR, "scream_bottle_model.blend")
GLB_PATH = os.path.join(OUT_DIR, "scream_bottle_model.glb")
PREVIEW_PATH = os.path.join(OUT_DIR, "scream_bottle_preview.png")


def smoothstep(edge0, edge1, x):
    if edge0 == edge1:
        return 0.0
    t = max(0.0, min(1.0, (x - edge0) / (edge1 - edge0)))
    return t * t * (3.0 - 2.0 * t)


def band(z, start, fade_in_end, fade_out_start, end):
    return smoothstep(start, fade_in_end, z) * (1.0 - smoothstep(fade_out_start, end, z))


def set_input(bsdf, names, value):
    for name in names:
        if name in bsdf.inputs:
            bsdf.inputs[name].default_value = value
            return


def material(name, color, alpha=1.0, roughness=0.35, transmission=0.0, metallic=0.0):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = color
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        set_input(bsdf, ["Base Color"], color)
        set_input(bsdf, ["Alpha"], alpha)
        set_input(bsdf, ["Roughness"], roughness)
        set_input(bsdf, ["Metallic"], metallic)
        set_input(bsdf, ["Transmission Weight", "Transmission"], transmission)
        set_input(bsdf, ["IOR"], 1.46)
    mat.blend_method = "BLEND"
    mat.show_transparent_back = True
    if hasattr(mat, "use_screen_refraction"):
        mat.use_screen_refraction = True
    return mat


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for block in list(bpy.data.meshes):
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in list(bpy.data.materials):
        if block.users == 0:
            bpy.data.materials.remove(block)


def profile_radius(z):
    profile = [
        (0.02, 0.34),
        (0.06, 0.44),
        (0.13, 0.56),
        (0.22, 0.62),
        (0.42, 0.61),
        (0.92, 0.57),
        (1.45, 0.49),
        (1.95, 0.52),
        (2.30, 0.59),
        (2.55, 0.68),
        (2.77, 0.76),
        (2.98, 0.73),
        (3.18, 0.58),
        (3.36, 0.41),
        (3.62, 0.35),
        (3.78, 0.39),
    ]
    if z <= profile[0][0]:
        return profile[0][1]
    for (z0, r0), (z1, r1) in zip(profile, profile[1:]):
        if z0 <= z <= z1:
            t = (z - z0) / (z1 - z0)
            return r0 + (r1 - r0) * t
    return profile[-1][1]


def bottle_radius(theta, z):
    r = profile_radius(z)
    grip = band(z, 0.42, 0.72, 2.15, 2.45)
    shoulder = band(z, 2.35, 2.62, 3.08, 3.26)
    waist = band(z, 0.80, 1.05, 1.80, 2.15)
    groove = max(0.0, math.cos(10.0 * theta)) ** 18
    soft_panel = 0.5 + 0.5 * math.cos(4.0 * theta)
    r *= 1.0 - 0.050 * grip * groove
    r *= 1.0 - 0.018 * waist * soft_panel
    r *= 1.0 + 0.012 * shoulder * math.cos(8.0 * theta)
    return r


def make_bottle_shell(mat):
    z_values = [
        0.02, 0.06, 0.10, 0.16, 0.24, 0.36, 0.56, 0.82, 1.08, 1.34,
        1.62, 1.90, 2.16, 2.38, 2.56, 2.72, 2.88, 3.04, 3.20, 3.38,
        3.58, 3.74, 3.82,
    ]
    segments = 168
    verts = []
    faces = []
    for i in range(segments):
        theta = 2.0 * math.pi * i / segments
        for z in z_values:
            r = bottle_radius(theta, z)
            verts.append((r * math.cos(theta), r * math.sin(theta), z))
    rows = len(z_values)
    for i in range(segments):
        ni = (i + 1) % segments
        for j in range(rows - 1):
            faces.append((i * rows + j, ni * rows + j, ni * rows + j + 1, i * rows + j + 1))
    mesh = bpy.data.meshes.new("sportsBottleShellMesh")
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    obj = bpy.data.objects.new("clear PET ergonomic sports drink bottle shell", mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    for poly in obj.data.polygons:
        poly.use_smooth = True
    solid = obj.modifiers.new("real thin PET wall thickness", "SOLIDIFY")
    solid.thickness = 0.026
    solid.offset = 0
    bevel = obj.modifiers.new("soft molded rim edges", "BEVEL")
    bevel.width = 0.010
    bevel.segments = 3
    obj.modifiers.new("clean molded normals", "WEIGHTED_NORMAL")
    return obj


def make_revolved_solid(name, rings, mat, segments=144, modulated=False):
    verts = []
    faces = []
    for i in range(segments):
        theta = 2.0 * math.pi * i / segments
        for z, r in rings:
            rr = r
            if modulated:
                rr = min(rr, bottle_radius(theta, z) * 0.91)
            verts.append((rr * math.cos(theta), rr * math.sin(theta), z))
    rows = len(rings)
    for i in range(segments):
        ni = (i + 1) % segments
        for j in range(rows - 1):
            faces.append((i * rows + j, ni * rows + j, ni * rows + j + 1, i * rows + j + 1))
    bottom_center = len(verts)
    verts.append((0, 0, rings[0][0]))
    top_center = len(verts)
    verts.append((0, 0, rings[-1][0]))
    for i in range(segments):
        ni = (i + 1) % segments
        faces.append((bottom_center, ni * rows, i * rows))
        faces.append((top_center, i * rows + rows - 1, ni * rows + rows - 1))
    mesh = bpy.data.meshes.new(name + "Mesh")
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj


def add_cylinder(name, radius, depth, z, mat, vertices=128, bevel_width=0.018):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=(0, 0, z))
    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(mat)
    for poly in obj.data.polygons:
        poly.use_smooth = True
    if bevel_width:
        bevel = obj.modifiers.new("rounded molded edges", "BEVEL")
        bevel.width = bevel_width
        bevel.segments = 4
        obj.modifiers.new("weighted normals", "WEIGHTED_NORMAL")
    return obj


def add_torus(name, z, major, minor, mat, segments=144):
    bpy.ops.mesh.primitive_torus_add(
        major_segments=segments,
        minor_segments=10,
        major_radius=major,
        minor_radius=minor,
        location=(0, 0, z),
    )
    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(mat)
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj


def add_radial_ridge(name, theta, radius, z, tangential, radial, height, mat):
    bpy.ops.mesh.primitive_cube_add(location=(radius * math.cos(theta), radius * math.sin(theta), z))
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler[2] = theta - math.pi / 2.0
    obj.dimensions = (tangential, radial, height)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    bevel = obj.modifiers.new("small cap tooth roundover", "BEVEL")
    bevel.width = min(tangential, radial) * 0.35
    bevel.segments = 2
    obj.modifiers.new("weighted normals", "WEIGHTED_NORMAL")
    return obj


def surface_point_from_x(x, z, offset=0.030):
    r = profile_radius(z) + offset
    x = max(min(x, r * 0.90), -r * 0.90)
    y = -math.sqrt(max(r * r - x * x, 0.001))
    return (x, y, z)


def add_front_polygon(name, points, mat, offset=0.032):
    verts = [surface_point_from_x(x, z, offset) for x, z in points]
    mesh = bpy.data.meshes.new(name + "Mesh")
    mesh.from_pydata(verts, [], [tuple(range(len(verts)))])
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    return obj


def add_front_curve(name, points, mat, width=0.018, offset=0.035):
    curve = bpy.data.curves.new(name + "Curve", "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 3
    curve.bevel_depth = width
    curve.bevel_resolution = 4
    spline = curve.splines.new("POLY")
    spline.points.add(len(points) - 1)
    for point, (x, z) in zip(spline.points, points):
        point.co = (*surface_point_from_x(x, z, offset), 1.0)
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    return obj


def add_front_text(name, body, x, z, size, mat, angle=0):
    loc = surface_point_from_x(x, z, 0.040)
    bpy.ops.object.text_add(location=loc, rotation=(math.radians(90), 0, math.radians(angle)))
    obj = bpy.context.object
    obj.name = name
    obj.data.body = body
    obj.data.align_x = "CENTER"
    obj.data.align_y = "CENTER"
    obj.data.size = size
    obj.data.extrude = 0.003
    obj.data.materials.append(mat)
    return obj


def build_model():
    os.makedirs(OUT_DIR, exist_ok=True)
    clear_scene()
    random.seed(83)

    pet = material("clear blue tinted PET plastic, thin walled", (0.72, 0.92, 1.0, 0.24), 0.24, 0.08, 0.70)
    pet_edge = material("thick PET edge and molded seam highlights", (0.70, 0.93, 1.0, 0.42), 0.42, 0.05, 0.62)
    cap = material("frosted translucent sport cap plastic", (0.88, 0.96, 1.0, 0.66), 0.66, 0.36, 0.22)
    cap_shadow = material("cap groove soft grey shadow", (0.36, 0.48, 0.52, 0.30), 0.30, 0.55, 0.0)
    orange = material("orange functional drink lower concentration", (1.0, 0.34, 0.02, 0.72), 0.72, 0.18, 0.22)
    amber = material("pale amber drink upper layer", (1.0, 0.68, 0.20, 0.42), 0.42, 0.14, 0.28)
    white = material("white direct printed scream graphics", (1, 1, 1, 1), 1.0, 0.36, 0.0)
    print_orange = material("orange direct printed side word", (0.86, 0.38, 0.03, 1), 1.0, 0.42, 0.0)
    black = material("muted tiny regulatory print", (0.015, 0.012, 0.01, 0.72), 0.72, 0.55, 0.0)
    water = material("clear sparse condensation beads", (0.92, 1.0, 1.0, 0.62), 0.62, 0.02, 0.78)
    wood = material("simple warm cafe tabletop", (0.78, 0.45, 0.20, 1), 1.0, 0.40, 0.0)

    bottle = make_bottle_shell(pet)

    lower_rings = [
        (0.10, 0.35), (0.18, 0.50), (0.34, 0.55), (0.80, 0.53),
        (1.35, 0.46), (1.95, 0.49), (2.30, 0.56), (2.42, 0.58),
    ]
    upper_rings = [
        (2.40, 0.58), (2.60, 0.64), (2.84, 0.66), (3.04, 0.54),
        (3.20, 0.39), (3.30, 0.32),
    ]
    make_revolved_solid("orange drink body shaped by the transparent bottle", lower_rings, orange, modulated=True)
    make_revolved_solid("pale amber upper drink fading toward the neck", upper_rings, amber, modulated=True)
    add_torus("crisp orange liquid level line", 2.42, 0.58, 0.010, orange)
    add_torus("clear air gap meniscus near neck", 3.30, 0.32, 0.006, pet_edge, segments=96)

    add_torus("heavy transparent base punt outer ring", 0.17, 0.50, 0.033, pet_edge)
    add_torus("inner base punt depression", 0.105, 0.28, 0.014, pet_edge, segments=120)
    for idx, z in enumerate([0.34, 2.36, 2.52, 3.08, 3.76]):
        add_torus("molded bottle seam and refraction ring.%02d" % idx, z, profile_radius(z) + 0.006, 0.006, pet_edge)
    for idx, theta in enumerate([math.radians(v) for v in [225, 242, 258, 282, 298, 315]]):
        points = []
        for z in [0.48, 0.78, 1.12, 1.48, 1.84, 2.18]:
            r = bottle_radius(theta, z) + 0.030
            points.append((r * math.cos(theta), r * math.sin(theta), z, 1.0))
        curve = bpy.data.curves.new("actual molded vertical grip crease.%02dCurve" % idx, "CURVE")
        curve.dimensions = "3D"
        curve.bevel_depth = 0.006
        curve.bevel_resolution = 3
        spline = curve.splines.new("POLY")
        spline.points.add(len(points) - 1)
        for point, co in zip(spline.points, points):
            point.co = co
        obj = bpy.data.objects.new("actual molded vertical grip crease.%02d" % idx, curve)
        bpy.context.collection.objects.link(obj)
        obj.data.materials.append(pet_edge)

    add_cylinder("transparent neck cylinder inside cap", 0.34, 0.32, 3.66, pet_edge, vertices=112, bevel_width=0.012)
    add_torus("neck screw thread lower", 3.55, 0.34, 0.010, pet_edge, segments=112)
    add_torus("neck screw thread upper", 3.70, 0.35, 0.010, pet_edge, segments=112)
    add_cylinder("ribbed screw cap ring for sport bottle", 0.46, 0.43, 4.02, cap, vertices=144, bevel_width=0.018)
    add_torus("cap lower tamper bead", 3.78, 0.45, 0.014, cap, segments=144)
    add_torus("cap top bead", 4.25, 0.43, 0.013, cap, segments=144)
    add_torus("thin shadow gap under cap", 3.80, 0.45, 0.006, cap_shadow, segments=144)
    for i in range(86):
        theta = 2.0 * math.pi * i / 86
        add_radial_ridge("cap vertical anti slip rib.%03d" % i, theta, 0.468, 4.02, 0.0085, 0.020, 0.35, cap)
    for idx, z in enumerate([3.90, 3.99, 4.08, 4.17]):
        add_torus("subtle horizontal cap groove.%02d" % idx, z, 0.461, 0.0035, cap_shadow, segments=144)

    add_cylinder("push pull sport drinking spout", 0.285, 0.38, 4.42, cap, vertices=96, bevel_width=0.030)
    add_cylinder("flat sealed top of sport spout", 0.245, 0.080, 4.66, cap, vertices=96, bevel_width=0.020)
    add_cylinder("small circular recess on spout top", 0.145, 0.012, 4.706, cap_shadow, vertices=80, bevel_width=0.004)

    label_polys = [
        [(-0.52, 2.42), (-0.32, 2.82), (-0.24, 2.04), (-0.39, 1.94)],
        [(-0.22, 2.52), (-0.06, 2.92), (0.02, 2.08), (-0.12, 2.02)],
        [(0.10, 2.16), (0.40, 2.78), (0.26, 1.94), (0.08, 1.98)],
        [(-0.48, 1.95), (-0.34, 1.30), (-0.21, 1.86)],
        [(0.34, 1.90), (0.47, 1.24), (0.26, 1.70)],
        [(0.06, 1.85), (0.13, 0.70), (-0.03, 1.40)],
        [(-0.06, 0.92), (0.10, 0.54), (0.18, 1.05)],
    ]
    for idx, pts in enumerate(label_polys):
        add_front_polygon("direct printed white angular energy mark.%02d" % idx, pts, white)
    add_front_curve("white runner torso print", [(0.02, 1.42), (-0.06, 1.18), (-0.16, 1.02)], white, width=0.022)
    add_front_curve("white runner leading arm print", [(-0.03, 1.24), (-0.24, 1.30), (-0.36, 1.42)], white, width=0.018)
    add_front_curve("white runner trailing arm print", [(-0.02, 1.24), (0.18, 1.17), (0.31, 1.04)], white, width=0.018)
    add_front_curve("white runner leading leg print", [(-0.14, 1.02), (-0.28, 0.78), (-0.43, 0.78)], white, width=0.022)
    add_front_curve("white runner trailing leg print", [(-0.13, 1.03), (0.08, 0.84), (0.20, 0.64)], white, width=0.022)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=12, radius=0.060, location=surface_point_from_x(0.04, 1.50, 0.045))
    head = bpy.context.object
    head.name = "white runner head printed dot"
    head.scale.y *= 0.28
    head.data.materials.append(white)
    add_front_text("vertical orange scream product word", "scream", -0.54, 2.08, 0.19, print_orange, angle=80)
    for i, width in enumerate([0.004, 0.007, 0.003, 0.010, 0.004, 0.006, 0.003, 0.008]):
        x = -0.61 + i * 0.013
        add_front_curve("small side barcode stroke.%02d" % i, [(x, 0.68), (x + 0.02, 1.22)], black, width=width, offset=0.043)

    for i in range(48):
        z = random.uniform(2.55, 3.42)
        theta = random.uniform(math.radians(220), math.radians(320))
        r = bottle_radius(theta, z) + random.uniform(0.030, 0.040)
        size = random.uniform(0.008, 0.032)
        bpy.ops.mesh.primitive_uv_sphere_add(
            segments=18,
            ring_count=9,
            radius=size,
            location=(r * math.cos(theta), r * math.sin(theta), z),
        )
        obj = bpy.context.object
        obj.name = "sparse realistic shoulder condensation bead.%03d" % i
        obj.scale.z *= random.uniform(0.45, 0.85)
        obj.data.materials.append(water)
        for poly in obj.data.polygons:
            poly.use_smooth = True
    for i in range(28):
        z = random.uniform(0.62, 3.08)
        theta = random.uniform(0, 2 * math.pi)
        r = profile_radius(z) * random.uniform(0.12, 0.78)
        bpy.ops.mesh.primitive_uv_sphere_add(
            segments=14,
            ring_count=7,
            radius=random.uniform(0.006, 0.018),
            location=(r * math.cos(theta), r * math.sin(theta), z),
        )
        obj = bpy.context.object
        obj.name = "tiny internal beverage bubble.%03d" % i
        obj.data.materials.append(pet_edge)

    bpy.ops.mesh.primitive_cylinder_add(vertices=192, radius=2.35, depth=0.08, location=(0, 0, -0.055))
    table = bpy.context.object
    table.name = "plain round cafe tabletop for product scale"
    table.data.materials.append(wood)

    bpy.ops.object.light_add(type="AREA", location=(-3.4, -4.6, 6.0))
    key = bpy.context.object
    key.name = "large soft window reflection"
    key.data.energy = 520
    key.data.size = 4.8
    bpy.ops.object.light_add(type="POINT", location=(2.3, -2.8, 4.1))
    sparkle = bpy.context.object
    sparkle.name = "small PET sparkle light"
    sparkle.data.energy = 65

    bpy.ops.object.camera_add(location=(3.00, -7.35, 2.50))
    cam = bpy.context.object
    bpy.context.scene.camera = cam
    direction = Vector((0, 0, 2.28)) - cam.location
    cam.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    cam.data.type = "ORTHO"
    cam.data.ortho_scale = 5.35
    cam.data.dof.use_dof = False

    bpy.context.scene.render.engine = "CYCLES"
    bpy.context.scene.cycles.samples = 40
    bpy.context.scene.view_settings.view_transform = "Filmic"
    bpy.context.scene.view_settings.look = "Medium High Contrast"
    bpy.context.scene.world = bpy.context.scene.world or bpy.data.worlds.new("World")
    bpy.context.scene.world.color = (0.025, 0.027, 0.030)
    bpy.context.scene.render.resolution_x = 1200
    bpy.context.scene.render.resolution_y = 1600

    note = bpy.data.objects.new("subject interpretation: Scream style sports drink bottle with ergonomic PET body and sport drinking cap", None)
    bpy.context.collection.objects.link(note)

    bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)
    bpy.ops.export_scene.gltf(filepath=GLB_PATH, export_format="GLB", use_selection=False)
    bpy.context.scene.render.filepath = PREVIEW_PATH
    bpy.ops.render.render(write_still=True)
    print("Rebuilt product-aware sports drink model:")
    print(BLEND_PATH)
    print(GLB_PATH)
    print(PREVIEW_PATH)


build_model()
