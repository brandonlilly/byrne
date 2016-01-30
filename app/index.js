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

// scene.fog = new Fog(0xFFFFFF, 0.0005)

const renderer = new WebGLRenderer({
  antialiasing: true,
  precision: "highp",
  stencil: true,
  preserveDrawingBuffer: true,
  alpha: true,
});
const container = document.createElement("div");

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(container);
container.appendChild(renderer.domElement);

animate();

let startTime = new Date();

function animate() {
  requestAnimationFrame(animate);

  let elapsed = (new Date() - startTime) / 1000;

  particles.rotation.y += 0.0008;
  line.rotation.y += 0.0008;

  if (elapsed > 0) {
    const vel = 0.5;
    streaks.forEach(
      streak => {
        streak.geometry.vertices[0].y -= vel;
        streak.geometry.vertices[1].y -= vel / 2.0;
        streak.geometry.verticesNeedUpdate = true;
      }
    )
    points.translateY(-vel);
  }

  renderer.render(scene, camera);
}
