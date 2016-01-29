export function isProduction(){
  return process.env.NODE_ENV === 'production';
}

export function isDevelopment(){
  return process.env.NODE_ENV === 'development';
}

export function classSet(classMap) {
  const classes = [];
  for (const className in classMap) {
    if (classMap[className]) {
      classes.push(className);
    }
  }
  return classes.join(' ');
}
