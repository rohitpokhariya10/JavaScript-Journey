// let userPass = "Radha Radha";
// let flag = false;
// let attempt = 0;

// let input = prompt("pass batao ji");  // first prompt
// if (input === userPass) {
//   flag = true;
// } else {
//   attempt++; // count first failed attempt
// }

// //!false ---> means flag is false 1 attempt me user ne glt dala pass
// while (!flag && attempt < 3) {
//   input = prompt("pass batao ji");  // next attempt
//   if (input === userPass) {
//     flag = true;
//     break;
//   }
 
//   attempt++;
 
// }

// if (flag) {
//   console.log("Tusssiii Sahiii DassDAAAA...");
// } else {
//   console.error("Account Locked.....");
// }






//LOGIC 2---->
let userPass = "Rar";
let attempt = 0;
let maxAttempts = 3;

while (attempt < maxAttempts) {
  let input = prompt("Pass batao ji: ");

  if (input === userPass) {
    console.log("Tusssiii Sahiii DassDAAAA...");
    break;
  } else {
    console.log("Galat hai ji!");
    attempt++;
  }
}

if (attempt === maxAttempts) {
  console.log("Tusssiii Galat DassDAAAA... 3 baar galat bol dia!");
  console.log("ACCOUNT LOCKED");
}







// Q19)-----> ye code 1000 input ke baad input nhi le rha hai
// let balance = 1000;
// let counter = 0;
// while(balance >0 && counter!==3){
//   let input = prompt("ENTER AMOUNT");
//  balance -= input;   // correct
//   counter++;
// }
// if(balance<=0){
//   console.error("Insufficient balance");
// }




// let balance = 1000;
// let counter = 0;

// while (counter < 3) {
//   counter++;
//   let input = prompt("Enter the amount to withdraw:");

//   // Cancel case → stop completely
//   if (input === null) {
//     console.log("Transaction cancelled by user.");
//     break;
//   }

//   input = Number(input);

//   // Invalid number
//   if (isNaN(input) || input <= 0) {
//     console.log("Enter a valid amount.");
//     continue;
//   }

//   // Amount greater than balance
//   if (input > balance) {
//     console.error("Insufficient balance.");
//     break;  // Stop the program after showing insufficient balance
//   }

//   // Valid withdrawal
//   balance -= input;
//   console.log("Balance left:", balance);

//   // Added condition: if balance is 0, show the result
//   if (balance === 0) {
//     console.log("Balance is now zero.");
//   }
// }

// // Final result
// console.log("Final balance:", balance);


