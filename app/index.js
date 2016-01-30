import { Scene, WebGLRenderer, Fog } from 'three';
import { createStreaksSystem } from './streaks';
import { createLineSystem } from './lines';
import { createCamera } from './camera';
import { createLog } from './log';

console.log = createLog();

const scene = new Scene();
const camera = createCamera();

const { particles, line } = createLineSystem();
scene.add(particles);
scene.add(line);

const { particles:points, streaks } = createStreaksSystem();
// scene.add(points);
// streaks.forEach(
//   streak => scene.add(streak)
// );

const renderer = new WebGLRenderer({
  antialiasing: true,
  precision: "highp",
  stencil: true,
  preserveDrawingBuffer: true,
  alpha: true,
});
const container = document.createElement("div");

window.addEventListener('resize', resizeRenderer, true);
resizeRenderer();

document.body.appendChild(container);
container.appendChild(renderer.domElement);

animate();

function animate() {
  requestAnimationFrame(animate);

  particles.rotation.y += 0.0008;
  line.rotation.y += 0.0008;

  const vel = 0.5;
  streaks.forEach(
    streak => {
      streak.geometry.vertices[0].y -= vel;
      streak.geometry.vertices[1].y -= vel / 2.0;
      streak.geometry.verticesNeedUpdate = true;
    }
  )
  points.translateY(-vel);

  renderer.render(scene, camera);
}

function resizeRenderer() {
  renderer.setSize(window.innerWidth, window.innerHeight)
}
