const wall={x: 1, y: 1};
const ball={x: 2, y: 6, radius: 0.5};
function distancia(a,b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
function distanciaPared(a,b) {
  const distancia1= distancia(a,b);
  return distancia1 - b.radius;
}
console.log(distanciaPared(wall,ball));