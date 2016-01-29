import { Scene, WebGLRenderer, Fog } from 'three';
import { createLineSystem } from './lines';
import { createCamera } from './camera';
import { createLog } from './log';

console.log = createLog();

const scene = new Scene();
const camera = createCamera();

const { particles, line } = createLineSystem();
scene.add(particles);
scene.add(line);

scene.fog = new Fog(0xFFFFFF, 0.0005)

const renderer = new WebGLRenderer({
  antialiasing: true,
  precision: "highp",
  stencil: true,
  preserveDrawingBuffer: true,
  alpha: true,
});
const container = document.createElement("div")

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(container)
container.appendChild(renderer.domElement)

animate();

function animate() {
  requestAnimationFrame(animate);

  particles.rotation.y += 0.0008;
  line.rotation.y += 0.0008;

  renderer.render(scene, camera);
}
