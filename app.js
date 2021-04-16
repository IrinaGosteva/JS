//FIRST WEEK---------------------------------------------------

let string = "some test string";

// 1
let value =
  string.slice(0, 1).toUpperCase() +
  string.slice(1, -1) +
  string.slice(-1).toUpperCase();

value = `${string.slice(0, 1).toUpperCase()}${string.slice(
  1,
  -1
)}${string.slice(-1).toUpperCase()}`;

// 2
value = string.indexOf(" ");

// 3
value = string.indexOf(" ", string.indexOf(" ") + 1);

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
value = (Math.random() * x).toFixed();

// 9
value = (0.6 + 0.7).toFixed(1);
value = (0.6 * 10 + 0.7 * 10) / 10;

// 10
const obj = {
  product: "iPhone",
};

obj.price = 1000;
obj.currency = "dollar";
obj.details = {};
obj.details.model = "";
obj.details.color = "";

console.log(obj);
console.clear();

//SECOND WEEK---------------------------------------------------

// 1
let car = {
  name: "Lexus",
  age: 10,
  lastService: "6 month",
  create: 2008,
  needRepair: false,
};

function serviceMessage(car) {
  value = parseFloat(car.lastService);
  let msg = "";
  if (value > 5) {
    car.needRepair = true;
    msg = `Need to be repaired`;
  } else {
    car.needRepair = false;
    msg = `Your car is fine`;
  }
  console.log(msg, car.needRepair);
}

serviceMessage(car);

// 2
let product = {
  name: "Яблоко",
  price: "10$",
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

function getItems(product) {
  value = parseFloat(product.price);
  let prod = "";
  prod = value >= min && value <= max ? product.name : `The item is not found`;
  console.log(prod);
}

getItems(product);

// 3
let str = "JavaScript is a pretty good language";
let newStr = "";
value = str.split(` `);

for (let i = 0; i < value.length; i++) {
  newStr += value[i].slice(0, 1).toUpperCase() + value[i].slice(1);
}

console.log(newStr);

// 4
const arr = [1, 2, 3];

function doubleArray(arr) {
  newArr = arr.concat(arr);
  return newArr;
}

console.log(doubleArray(arr));

// 5
const newArrOfArrs = [];
function changeCollection(...arguments) {
  for (let i = 0; i < arguments.length; i++) {
    value = arguments[i].slice(1, arguments[i].length);
    newArrOfArrs[i] = [value];
  }
  return newArrOfArrs;
}

console.log(changeCollection([1, 2, 3], ["a", "b", "c"], ["Яблoко", "Банан"]));

// 6
const users = [
  {
    _id: "5d1c3860aa841704d3245513",
    isActive: false,
    balance: 2764.35,
    age: 33,
    name: "Allie Blair",
    gender: "female",
    company: "PHOTOBIN",
    email: "allieblair@photobin.com",
    phone: "+1 (951) 566-2987",
    registered: "2018-11-30T02:29:00 -02:00",
  },
  {
    _id: "5d1c386095ffb689687f2db9",
    isActive: false,
    balance: 3276.25,
    age: 22,
    name: "Yesenia Leblanc",
    gender: "female",
    company: "SKINSERVE",
    email: "yesenialeblanc@skinserve.com",
    phone: "+1 (947) 446-2840",
    registered: "2015-10-31T01:10:31 -02:00",
  },
  {
    _id: "5d1c3860e73ff2a338722e81",
    isActive: true,
    balance: 1868.65,
    age: 38,
    name: "Mamie Kramer",
    gender: "female",
    company: "EARBANG",
    email: "mamiekramer@earbang.com",
    phone: "+1 (885) 564-3305",
    registered: "2014-06-03T09:36:40 -03:00",
  },
  {
    _id: "5d1c386000e4f2fc62be1b1e",
    isActive: true,
    balance: 1003.15,
    age: 32,
    name: "Crawford Bryant",
    gender: "male",
    company: "DIGIRANG",
    email: "crawfordbryant@digirang.com",
    phone: "+1 (889) 408-2141",
    registered: "2015-01-15T05:20:21 -02:00",
  },
  {
    _id: "5d1c386008ff236a315d638b",
    isActive: false,
    balance: 3045.41,
    age: 36,
    name: "Helene Holland",
    gender: "female",
    company: "HYDROCOM",
    email: "heleneholland@hydrocom.com",
    phone: "+1 (937) 554-2040",
    registered: "2014-09-15T08:22:59 -03:00",
  },
  {
    _id: "5d1c3860b4c27c4d5fdb6c1f",
    isActive: true,
    balance: 1693.51,
    age: 23,
    name: "Hernandez Osborn",
    gender: "male",
    company: "TERRASYS",
    email: "hernandezosborn@terrasys.com",
    phone: "+1 (965) 595-3942",
    registered: "2016-08-06T12:19:01 -03:00",
  },
];

function funcGetUsers(arr, ...arguments) {
  const newUsersArr = [];

  for (let i = 0; i < users.length; i++) {
    newUsersArr[i] = {};

    for (let y = 0; y < arguments.length; y++) {
      newUsersArr[i][arguments[y]] = arr[i][arguments[y]];
    }
  }
  return newUsersArr;
}

console.log(funcGetUsers(users, "email", "name", "isActive"));

// 7
const object = {};

(function (x) {
  x.b = 1;
  x = null;
})(object);

//Есть закрытая самовызывающаяся функция в которую мы передаем объек object, функция копирует его в переменную х. Но копирование объектов идет по ссылке поэтому добавляемое поле b cо значением 1 меняет наш object на {b: 1}. Потом перезаписываем в переменную х = null нашего объекта object это уже никак не касается это своя внутрення переменная.
console.log(object);

// 8
const price = {
  price: 10,
  discount: "15%",
  getPrice,
  getPriceWithDiscount,
};

function getPrice() {
  console.log(this.price);
}

function getPriceWithDiscount() {
  priceWithDiscount =
    this.price - (this.price * parseFloat(this.discount)) / 100;
  console.log(priceWithDiscount);
}

price.getPrice();
price.getPriceWithDiscount();

// 9
let sizes = { width: 5, height: 10 },
  getSquare = function () {
    return this.width * this.height;
  };

console.log(getSquare.call(sizes));
