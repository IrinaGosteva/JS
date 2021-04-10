
let string = 'some test string';

// 1
value = string.slice(0, 1).toUpperCase() + string.slice(1, -1) + string.slice(-1).toUpperCase();

value = `${string.slice(0, 1).toUpperCase()}${string.slice(1, -1)}${string.slice(-1).toUpperCase()}`;

// 2
value = string.indexOf(' ');

// 3
value = string.indexOf(' ', string.indexOf(' ') + 1);

// 4
value = string.slice(5, 10);

// 5
value = Math.PI.toFixed(2);

// 6
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

// 7
value = Math.random().toFixed(2);

// 8
let x = 3;
value = (Math.random() * x ).toFixed();

// 9
value = (0.6 + 0.7 ).toFixed(1);
value = (0.6 * 10 + 0.7 * 10 ) / 10;

// 10
const obj = {
  product: 'iPhone'
};

obj.price = 1000;
obj.currency =  'dollar';
obj.details = {};
obj.details.model = "";
obj.details.color = "";

console.log(obj);