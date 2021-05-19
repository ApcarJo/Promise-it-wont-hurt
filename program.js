
// WARM UP

// setTimeout(()=> {
//     console.log('TIMED OUT!');
// }, 300);


// FULLFILL A PROMISE

// 'use strict';
// var promise = new Promise(function (fulfill, reject) {
//     setTimeout(()=> {
//         fulfill('FULFILLED!')
//     }, 300);
// });
// promise
//     .then(console.log)


// REJECT A PROMISE

// var promise = new Promise(function (fulfill, reject) {
//     setTimeout(()=> {
//         reject(new Error('REJECTED!'));
//     }, 300);
//   });

//   function onReject (error) {
//     console.log(error.message);
//   }

//   promise
//     .then(null, onReject)


// TO REJECT OR NOT TO REJECT

// let promise = new Promise(function (res, rej) {
//     res('I FIRED');
//     rej(new Error('I DID NOT FIRE'));

// });

// const onRejected = (error) => {
//      console.log(error.message);
// }

// promise.then(console.log, onRejected);

// ALWAYS ASYNCHRONOUS

// let promise = new Promise(function (res, rej){
//     res('PROMISE VALUE');

// });

// promise.then(console.log);

// console.log("MAIN PROGRAM");

// SHORTCUTS

// let promise = new Promise(function (fulfill, reject) {
//     setTimeout(()=> {
//         reject(new Error('REJECTED!'));
//     }, 300);
//   });

//   function onReject (error) {
//     console.log(error.message);
//   }

//   promise.catch(onReject);

// let prom = Promise.resolve('HECHO!!! RESUELTO');
// let prom2 = Promise.reject(new Error('HECHO!!! RECHAZADO'));


// PROMISE AFTER PROMISE

// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });

// secondPromise.then(console.log);


// VALUES AND PROMISES


let promiseFirst = new Promise(function(resolve) {
    resolve('MANHATTAN');
});

const attachTitle = (val) => {
    return ("DR. " + val);
}

promiseFirst
    .then (attachTitle)
    .then (console.log);