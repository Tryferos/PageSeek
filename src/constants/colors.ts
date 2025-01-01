function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function getRandomBrightColor() {
  var h = rand(1, 360);
  var s = rand(0, 100);
  var l = rand(0, 100);
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
