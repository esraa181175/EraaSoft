// -------------- 1- SUM OF ALL NUMBERS----------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 7, 10];
// let total = 0;
// for (i = 0; i < numbers.length; i++) {
//     total += numbers[i]
// }
// console.log("Total the Numbers is :" + total);

// --------------2- toUpperCase----------------------------
// let FullName = "ahmed mohamed ali mahmoud ";
// console.log(FullName.toUpperCase());

// --------------3- largest number----------------------------

// let numbers =[1, 2, 3, 10, 20 ];
// let largest = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//     if ( numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
//     console.log(largest);

// --------------4- Smallest number----------------------------

// let numbers = [1, 2, 3, 10, 20,-5];
// let smallest = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }
// console.log(smallest);
// -----------------------5- average ------------------------------
// function FindAverage(array) {
//     let average = 0;
//     for (i = 0; i < array.length; i++) {
//         let Numbers = array[i];
//         average += Numbers;
//     }
//     average = average / array.length
//     return average
// }
// console.log(FindAverage([10, 20, 30,40]));

// -----------------------6- sum even numbers ----------------------
// function sumEvenNum() {
//     let numbers = [2,4,6, 5,1,];
//     let evenNum = 0;

//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             evenNum += numbers[i];
//         }
//     }
//     return evenNum;
// }
// console.log(sumEvenNum());

// // -----------------------7- second largest number ------------------------
// let array = [0, 5, 4, 0, 7, 0, 1, 2, 3, 6,80,10];
//  function secondLargest(array) {
//      array.sort((a, b) => a - b);
//      console.log(array);
//      console.log(`Second laragest: ` + array[array.length - 2]);
//  }
// secondLargest(array);

// // -----------------------8-  ------------------------

// let array = [1, 8, 30, 4, 5, 6, 7,2, 10].sort((a, b) => a - b);
// console.log(array);

// for (i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 == 1) {
//         console.log(`odd numbers: ` + array[i]);
     
//     } else if (array[i] % 2 == 0) {
//         console.log(`even numbers: ` + array[i]);
//     }
// }








