const accId = '123456654'       //this cannot be edited
let accName = 'Krishna'         //let and var behave similar but issue with var as explained below
var accCity = 'Gokul'           //Not recomended to use coz block scope and function scope issue
accState = 'Uttar Pradesh'      //not a good practice

// console.log(accId);

// console.log(accName,accCity,accState)

// console.table([accId,accName,accCity,accState])

//------------------------------------------------------------------------------------------------------------------------------
//Data types in Js

//number  --  2 to power of 53
//bigint
//boolean -- true/false
//string
//null ---- standalone value
//undefined -- not yet defined
//object    -- instance of class
//symbol

//------------------------------------------------------------------------------------------------------------------------------
//Conversion

let hasName = true
let namehas = String(hasName)

let value = 44
let stringval = String(value)

console.log(hasName,typeof hasName)
console.log(namehas,typeof namehas)

console.log(value,typeof value)
console.log(stringval, typeof stringval)