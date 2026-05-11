import * as THREE from 'three';
import { PhysicsWorld } from './physics/PhysicsWorld.js';
import { Car } from './objects/Car.js';

// Physics Setup
const physics = new PhysicsWorld();
physics.createGround();

// Basic Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0c0);
scene.fog = new THREE.Fog(0xa0a0c0, 10, 500);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Create Car
const car = new Car(scene, physics);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 500;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
scene.add(dirLight);

// Ground (Visual)
const groundGeo = new THREE.PlaneGeometry(1000, 1000);
const groundMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    
    physics.update(delta);
    car.update();
    
    // Camera Follow Logic
    updateCamera();
    
    // UI Update
    updateUI();
    
    renderer.render(scene, camera);
}

function updateCamera() {
    const relativeCameraOffset = new THREE.Vector3(0, 5, 10);
    const cameraOffset = relativeCameraOffset.applyMatrix4(car.chassisMesh.matrixWorld);

    camera.position.lerp(cameraOffset, 0.1);
    camera.lookAt(car.chassisMesh.position);
}

function updateUI() {
    const speed = Math.round(car.getSpeed());
    document.getElementById('speed').innerText = `Speed: ${speed} km/h`;
}

animate();
