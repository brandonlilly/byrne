import {
  Geometry,
  ImageUtils,
  Line,
  LineBasicMaterial,
  PointsMaterial,
  Points,
  TextureLoader,
  Vector3
} from 'three';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';
import { randomize } from './utils';

function randomVector(distance){
  return new Vector3(
    randomize(-distance, distance),
    randomize(-distance, distance),
    randomize(-distance, distance)
  );
}

export function createLineSystem(){
  const distance = 600;
  const geometry = new Geometry();
  const amount = 60;
  const easeIn = window.GreenSockGlobals.Ease.map.easeInQuad;

  const textureLoader = new TextureLoader();

  const material = new PointsMaterial({
    color: 0xFFFFFF,
    size: 16,
    opacity: 0,
    map: textureLoader.load("textures/dot.png"),
    transparent: true
  });

  for (let step = 0; step < amount; step++) {
    const vectorf = randomVector(distance);
    geometry.vertices.push(vectorf);
  }

  TweenLite.to(
    material,
    2.6,
    { opacity: 0.05, ease: easeIn }
  );

  const particles = new Points(geometry, material);

  const materialLine = new LineBasicMaterial({
    color: 0xFFFFFF,
    opacity: 0.06,
    transparent: true
  });

  const line = new Line(geometry.clone(), materialLine);

  return { particles, line };
}
