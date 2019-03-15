
// 1. Coupon Code Validator 

/* 
Your mission:
Write a function called which verifies that a coupon code is valid, the coupon is not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var currentDate = new Date();
  var month = currentDate.getMonth;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  
  var months = {0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December"};
  var expDate = expirationDate.split(" ");
  
  return [].reduce.call(months, function(expired, month, index) {
     return   
  && expDate[1] === day && expDate[2] === year) && enteredCode === correctCode;

  