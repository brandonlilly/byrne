import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial
} from 'three';

export function createBox() {
  const geometry = new BoxGeometry(200, 200, 200);
  const material = new MeshBasicMaterial({ color: 0x336699, wireframe: true });
  const box = new Mesh(geometry, material);

  return box;
}
