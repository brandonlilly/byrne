import THREE, {
  Scene, PerspectiveCamera, BoxGeometry,
  MeshBasicMaterial, Mesh, WebGLRenderer
}
from 'three';

function createCamera(Camera, { viewAngle, aspectRatio, near, far }){
  return new Camera(viewAngle, aspectRatio, near, far);
}

const scene = new Scene();

const camera = createCamera(PerspectiveCamera, {
  viewAngle: 75,
  aspectRatio: window.innerWidth / window.innerHeight,
  near: 1,
  far: 10000,
  less: "how are you doing?"
});
camera.position.z = 1000;

const geometry = new BoxGeometry(200, 200, 200);
const material = new MeshBasicMaterial({ color: 0x336699, wireframe: true });
const box = new Mesh(geometry, material);
scene.add(box);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

animate();

function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.02;

  renderer.render(scene, camera);
}
