var x1 = 5;
var x2 = 9;
var y1 = 3;
var y2 = 6;

var x3 = Math.pow(x2 - x1, 2);
var y3 = Math.pow(y2 - y1, 2);

let distancia = Math.sqrt(x3 + y3);

console.log(distancia);