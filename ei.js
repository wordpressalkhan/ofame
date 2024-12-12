// Import the necessary modules from Three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create a camera, which determines what we'll see when we render the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer and attach it to our document
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube and add it to the scene
function createCube() {
  const geometry = new THREE.BoxGeometry(); // Define the shape of the geometry
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Define the look of the geometry
  const cube = new THREE.Mesh(geometry, material); // Combine geometry and material into a mesh

  scene.add(cube); // Add the mesh to the scene
  return cube;
}

const cube = createCube();

// Position the camera so we can see the cube
camera.position.z = 5;

// Create an animation loop to render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some basic animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Handle window resize to maintain aspect ratio
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
