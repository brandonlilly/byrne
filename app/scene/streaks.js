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
import { randomize } from '../utils';

export function createStreaksSystem(){
  const distance = 600;
  const amount = 100;
  const textureLoader = new TextureLoader();

  const pointsMaterial = new PointsMaterial({
    color: 0xFFFFFF,
    size: 16,
    opacity: 0.05,
    map: textureLoader.load("textures/dot.png"),
    transparent: true
  });

  const lineMaterial = new LineBasicMaterial({
    color: 0xFFFFFF,
    opacity: 0.05,
    linewidth: 1,
    transparent: true
  });

  const streaks = [];
  const pointsGeometry = new Geometry();

  for (let step = 0; step < amount; step++) {
    const vectorf = new Vector3(
      randomize(-distance, distance),
      randomize(-distance, distance),
      randomize(-distance, distance)
    )

    const geometry = new Geometry({ dynamic: true });
    geometry.vertices.push(vectorf);
    geometry.vertices.push(vectorf.clone());
    geometry.dynamic = true;

    const line = new Line(geometry, lineMaterial);
    line.frustumCulled = false;
    streaks.push(line);

    pointsGeometry.vertices.push(vectorf.clone());
  }

  const particles = new Points(pointsGeometry, pointsMaterial);

  return { particles, streaks };
}
