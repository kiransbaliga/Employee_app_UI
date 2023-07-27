const isLowerCase = (str) => str === str.toLowerCase();
const isUpperCase = (str) => str === str.toUpperCase();
text = "HeLlo";
fin = "";
for (i = 0; i < text.length; i++) {
  if (isLowerCase(text[i])) {
    k = text[i].toUpperCase();
  } else {
    k = text[i].toLowerCase();
  }
  fin += k;
}
console.log(fin);

// inp=prompt("enter array")
// inp = inp.split(/(\s+)/)
// console.log(inp)

arr = [1, 2, 3, 4, 5];
const squares = (num) => num * num;
const sumofelem = (sum, curr) => sum + curr;
function sumOfSquares(arr) {
  sum = arr.map(squares).reduce(sumofelem);
  sum;
}
sumOfSquares(arr);

text2 = "i am here";
len = text2.match(/[aeiou]/gi).length;
len;

pattern = "Contact us at: john@example.com, mary@gmail.com, and info@example.";
matches = pattern.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g);
matches;

/*
undefined
10
error
code doesnt run
*/

function createBase(num) {
  return function (k, base = num) {
    return k + base;
  };
}

createBase =
  (num) =>
  (k, base = num) =>
    k + base;
var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

function wash(callback) {
  setTimeout(function () {
    console.log("wash");
    callback();
  }, 3000);
}

function dry(callback) {
  setTimeout(function () {
    console.log("dry");
    callback();
  }, 300);
}

function fold(callback) {
  setTimeout(function () {
    console.log("fold");
    callback();
  }, 100);
}

function doLaundry(callback) {
  if (callback.length == 1) {
    fun = callback.shift();
    fun(function () {
      console.log("done!");
    });
  } else {
    fun = callback.shift();
    fun(()=>doLaundry(callback));
  }
}
doLaundry([wash, dry, fold]);


const originalData = {
    id: 1,
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      street: '123 Main St',
      zip: '10001',
    },
  };
  
  // Update the 'name' and 'city' property in the 'address' object
  const updatedData = {
    ...originalData,
    name:"Kiran",
    address:{
        ...originalData.address,
        city:"Kerala"
    },
}

  
  console.log(originalData);
  console.log(updatedData);


  function print() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => console.log(i), i * 1000)
    }
}
print()

