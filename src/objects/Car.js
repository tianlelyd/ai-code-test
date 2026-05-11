import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Car {
    constructor(scene, physicsWorld, position = { x: 0, y: 2, z: 0 }) {
        this.scene = scene;
        this.world = physicsWorld.world;
        this.chassisDimensions = { x: 2, y: 0.5, z: 4 };
        this.wheelRadius = 0.4;
        this.chassisColor = 0xff0000; // Red car

        this.createVehicle(position);
        this.createVisuals();
        this.setupInput();
    }

    createVehicle(pos) {
        // Chassis
        const chassisShape = new CANNON.Box(new CANNON.Vec3(this.chassisDimensions.x / 2, this.chassisDimensions.y / 2, this.chassisDimensions.z / 2));
        this.chassisBody = new CANNON.Body({ mass: 150 });
        this.chassisBody.addShape(chassisShape);
        this.chassisBody.position.set(pos.x, pos.y, pos.z);
        this.chassisBody.angularDamping = 0.5;

        // RaycastVehicle
        this.vehicle = new CANNON.RaycastVehicle({
            chassisBody: this.chassisBody,
        });

        // Wheel Options
        const wheelOptions = {
            radius: this.wheelRadius,
            directionLocal: new CANNON.Vec3(0, -1, 0),
            suspensionStiffness: 30,
            suspensionRestLength: 0.3,
            frictionSlip: 1.4,
            dampingRelaxation: 2.3,
            dampingCompression: 4.4,
            maxSuspensionForce: 100000,
            rollInfluence: 0.01,
            axleLocal: new CANNON.Vec3(1, 0, 0),
            chassisConnectionPointLocal: new CANNON.Vec3(1, 1, 0),
            maxSuspensionTravel: 0.3,
            customSlidingRotationalSpeed: -30,
            useCustomSlidingRotationalSpeed: true,
        };

        // Add Wheels
        // Front Left
        wheelOptions.chassisConnectionPointLocal.set(1, 0, 1.5);
        this.vehicle.addWheel(wheelOptions);
        // Front Right
        wheelOptions.chassisConnectionPointLocal.set(-1, 0, 1.5);
        this.vehicle.addWheel(wheelOptions);
        // Back Left
        wheelOptions.chassisConnectionPointLocal.set(1, 0, -1.5);
        this.vehicle.addWheel(wheelOptions);
        // Back Right
        wheelOptions.chassisConnectionPointLocal.set(-1, 0, -1.5);
        this.vehicle.addWheel(wheelOptions);

        this.vehicle.addToWorld(this.world);
        
        // Wheel Bodies (for collision only, visual representation handled separately)
        this.wheelBodies = [];
        this.vehicle.wheelInfos.forEach((wheel) => {
            const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20);
            const wheelBody = new CANNON.Body({ mass: 0 });
            wheelBody.type = CANNON.Body.KINEMATIC;
            wheelBody.collisionFilterGroup = 0; // Turn off collisions
            const q = new CANNON.Quaternion();
            q.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2);
            wheelBody.addShape(cylinderShape, new CANNON.Vec3(), q);
            this.wheelBodies.push(wheelBody);
            // this.world.addBody(wheelBody); // Not adding to world to avoid duplicate collision logic with raycast
        });
    }

    createVisuals() {
        // Chassis Mesh
        const geometry = new THREE.BoxGeometry(this.chassisDimensions.x, this.chassisDimensions.y, this.chassisDimensions.z);
        const material = new THREE.MeshStandardMaterial({ color: this.chassisColor, metalness: 0.6, roughness: 0.4 });
        this.chassisMesh = new THREE.Mesh(geometry, material);
        this.chassisMesh.castShadow = true;
        this.scene.add(this.chassisMesh);

        // Wheel Meshes
        this.wheelMeshes = [];
        this.vehicle.wheelInfos.forEach((wheel) => {
            const wGeo = new THREE.CylinderGeometry(wheel.radius, wheel.radius, 0.4, 24);
            wGeo.rotateZ(Math.PI / 2); // Rotate to align with axle
            const wMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
            const wMesh = new THREE.Mesh(wGeo, wMat);
            wMesh.castShadow = true;
            this.scene.add(wMesh);
            this.wheelMeshes.push(wMesh);
        });
    }

    setupInput() {
        this.actions = { acceleration: false, braking: false, left: false, right: false };

        document.addEventListener('keydown', (event) => {
            switch (event.key.toLowerCase()) {
                case 'w': case 'arrowup': this.actions.acceleration = true; break;
                case 's': case 'arrowdown': this.actions.braking = true; break;
                case 'a': case 'arrowleft': this.actions.left = true; break;
                case 'd': case 'arrowright': this.actions.right = true; break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.key.toLowerCase()) {
                case 'w': case 'arrowup': this.actions.acceleration = false; break;
                case 's': case 'arrowdown': this.actions.braking = false; break;
                case 'a': case 'arrowleft': this.actions.left = false; break;
                case 'd': case 'arrowright': this.actions.right = false; break;
            }
        });
    }

    update() {
        // Physics Controls
        const maxSteerVal = 0.5;
        const maxForce = 1000;
        const brakeForce = 1000000;

        // Steering
        this.vehicle.setSteeringValue(this.actions.left ? maxSteerVal : this.actions.right ? -maxSteerVal : 0, 0);
        this.vehicle.setSteeringValue(this.actions.left ? maxSteerVal : this.actions.right ? -maxSteerVal : 0, 1);

        // Engine
        const force = this.actions.acceleration ? -maxForce : this.actions.braking ? maxForce / 2 : 0;
        this.vehicle.applyEngineForce(force, 2);
        this.vehicle.applyEngineForce(force, 3);
        
        // Braking (Simple stop)
        if (this.actions.braking) {
            this.vehicle.setBrake(10, 0);
            this.vehicle.setBrake(10, 1);
            this.vehicle.setBrake(10, 2);
            this.vehicle.setBrake(10, 3);
        } else {
             this.vehicle.setBrake(0, 0);
            this.vehicle.setBrake(0, 1);
            this.vehicle.setBrake(0, 2);
            this.vehicle.setBrake(0, 3);
        }

        // Sync Visuals
        this.chassisMesh.position.copy(this.chassisBody.position);
        this.chassisMesh.quaternion.copy(this.chassisBody.quaternion);

        for (let i = 0; i < this.vehicle.wheelInfos.length; i++) {
            this.vehicle.updateWheelTransform(i);
            const t = this.vehicle.wheelInfos[i].worldTransform;
            this.wheelMeshes[i].position.copy(t.position);
            this.wheelMeshes[i].quaternion.copy(t.quaternion);
        }
    }
    
    getSpeed() {
        // Speed in km/h
        return this.vehicle.chassisBody.velocity.length() * 3.6;
    }
    
    getPosition() {
        return this.chassisBody.position;
    }
}
