export function createLog() {
  console.realLog = console.log;
  
  return function(...args) {
    if (args[0] == 'THREE.WebGLRenderer') {
      return;
    }
    console.realLog(...args)
  }
}
