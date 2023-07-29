// const promiseTest = new Promise((resolve, reject) => {
//   setTimeout(() => reject("done"), 1000);
// });

// promiseTest
//   .then((value) => console.log(value))
//   .catch((value) => console.log(value))
//   .finally();

// /*
//         there is then catch finally
//         another usage
//         promiseTest.then(
//             (value) => console.log(value),                              // passing as arguments
//             (value) => console.log(value)                               // passing as arguments
//         );

// */

// /*
//             Promise.all() returns a single promis that resolves that resolves when all of the passed in promises have resolved
//             Promice.race() returns a promise when one of the resolves is passed
// */

// /*
//         x=10
//           funtion inner(){
//             var x = undefined;
//             console log
//             x=20;
//           }

// */

// function createSequentialIdGenerator(baseValue) {
//   return () => ++baseValue;
// }
// const k = 999;
// const generateUniqueId = createSequentialIdGenerator(k);

// console.log(generateUniqueId()); // Expected output: 1000
// console.log(generateUniqueId()); // Expected output: 1001
// console.log(generateUniqueId());
// console.log(generateUniqueId());
// console.log(generateUniqueId());
// console.log(k);

// function swapKeyAndValues(obj) {
//   // Your code here
//   for (i in obj) {
//     let x = obj[i];
//     delete obj[i];
//     obj[x] = i;
//   }
// }

// const sampleObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// swapKeyAndValues(sampleObject);
// console.log(sampleObject);

// // Expected output:
// /*
// {
//   value1: 'key1',
//   value2: 'key2',
//   value3: 'key3'
// }
// */

// const students = [
//   { name: "John", marks: [70, 85, 90] },
//   { name: "Jane", marks: [60, 75, 80] },
//   { name: "David", marks: [50, 55, 65] },
// ];

// function add(sum, a) {
//   return sum + a;
// }

// function average(marks) {
//   let tot = marks.reduce(add, 0);
//   let avg = tot / marks.length;
//   if (avg > 40) return true;
//   return false;
// }

// function checkAllStudentsPassed(studentsArr) {
//   let tot = [];

//   for (stu in studentsArr) {
//     tot.push(studentsArr[stu].marks);
//   }

//   return tot.every(average);
// }

// const allStudentsPassed = checkAllStudentsPassed(students);

// console.log(allStudentsPassed);

/*------------------------------------ */

// function getProcessedData(url) {
//   return downloadData(url)
//     .catch((e) => {
//       return downloadFallbackData(url);
//     })
//     .then((value) => {
//       return processDataInWorker(value);
//     });
// }

// async function getdata(url) {
//   try {
//     let value = await downloadData(url);
//     return processDataInWorker(value);
//   } catch (e) {
//     return downloadFallbackData(url);
//   }
// }

// function simulateAsyncTask() {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     console.log(randomNumber);
//     setTimeout(() => {
//       if (randomNumber < 10) {
//         resolve("Success");
//       } else {
//         reject("Error: Task failed");
//       }
//     }, 500);
//   });
// }

// function retry(fun, num) {
//   return new Promise((resolve, reject) => {
//     if (num === 0) {
//       reject("Error Task failed");
//     } else {
//       fun()
//         .then(resolve)
//         .catch(() => retry(fun, --num));
//     }
//   });
// }

// // Sample invocation
// retry(simulateAsyncTask, 3)
//   .then((result) => console.log("Result:", result))
//   .catch((error) => console.log("Error:", error));

// function simulateAsyncTask() {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     setTimeout(() => {
//       if (randomNumber < 0.8) {
//         resolve("Success");
//       } else {
//         reject("Error: Task failed");
//       }
//     }, 500);
//   });
// }

// async function retry(fun, num) {
//   try {
//     let val = await simulateAsyncTask();
//     console.log("Result:", val);
//   } catch (e) {
//     if (num === 0) {
//       console.log("Error:", e);
//     } else {
//       retry(fun, --num);
//     }
//   }
// }

// // Sample invocation
// retry(simulateAsyncTask, 3);
// // .then(result => console.log('Result:', result))
// // .catch(error => console.log('Error:', error));





