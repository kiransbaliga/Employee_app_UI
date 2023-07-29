console.log("Hello world");
console.warn("warning"); // yellow warning
console.error("Error"); // red warning

var suku = "hello";
let nan = " world";

sukunan = suku + nan;
sukunan;

let x = {
  name: "Sukunan",
  num: 3,
};

x;

/*
var is available for the entire scope.
let is only available in the block level.


function blockscope() {
  const cond = true;
  if (cond) {
    let k = 10;
  }
  console.log(k);
}


blockscope();
*/

let car = "Tesla";
function mycar() {
  console.log(car);
}

mycar();

console.log(10 == "10");

console.log(10 === "10");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const fun = (param) => "Hello " + param;
const fun2 = (param1, param2) => param1 + param2;

console.log(fun("suku"));
console.log(fun2("suku", "nan"));

const fun3 = () => {
  let v = 5;
  console.log(v);
};
fun3();

let k = 2 + 3 + "high";
k;

console.log(k.charAt(2));
pi = Math.PI;
pi;

/*
Math.round()
Math.floor()
*/

/*
array.shift ( removes first element)
array,unshift(adds elem to friend)
*/


arr = [1,2,3,4,5]
arr.shift()
arr
arr.unshift(1)
arr
arr.push(6)
arr
arr2=arr.slice(0,4)
arr2
arr


let re = /[0123456789]/i  //i for case insenstivie
console.log(re.test("in 1992")); 

/*
 \d digit
 \w alphanumeric
 \s spave
 \D not digit
 |W not alphanumeric
 \S not space
 .  anything except newline

 + 1 or more
 * 0 to any
 ? 0 or 1 instance
 */


//Mutation 


let intro =`hello "kiran"'`;
intro



function incrementByOne(value, callback) {
	const x = value++;
callback(x);
}
incrementByOne(3, (value) => { console.log(value); });

//Async callback 
setTimeout(() => console.log(2), 10);

function callAfter5Seconds(callback) {
    
  setTimeout(() => callback("Ola amigos"), 5000);
}
callAfter5Seconds((data) => { console.log(data); });

