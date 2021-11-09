// Created by Jingga Sona

//     TEMPLATE
/*
        Made By Jingga Sona 13/4/2019 ©
*/

function _RandomNumber(min, max) {
    return Math.floor(Math.random() * (max -min + 1)) + min
}
function _RandomLetter(x,y){
var randoming = "abcdefghijklmnopqrstuvwxyz"
if(x == "lowercase"){
randoming = "abcdefghijklmnopqrstuvwxyz"
}
else if(x == "uppercase"){
randoming = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
else{
randoming = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
}

var randoming = randoming.split('')
var z = ""
for(var a = 1;a <= y;a++){
z += randoming[_RandomNumber(0,randoming.length -1)]
if(z == "undefined"){
z -= "undefined"
}
}
return z
}
function _RandomArray(x){
if (x == null || x == undefined || x == ""){
console.error("You are using Jingga Sona's _RandomArray() function, you need 1 parameter so the function can choose which array to be targeted")
}
else{
return x[_RandomNumber(0,x.length-1)]
}

}
function _RandomString(x,y){
if (x == null || x == "undefined" || x == "" || y == null || y == "undefined" || y == ""){
console.error("You are using Jingga Sona's _RandomString() function, you need 2 parameters parameter one is the target, and parameter 2 is the split string. for example:\n_RandomString(myString,' ')")
}
x = x.split(y)
return x[_RandomNumber(0,x.length - 1)]
}


function randomNumbersArray(n) {
var nums = [], num;
for (var i = 0; i < n; i++) 
{
do {
num = (Math.floor(Math.random() * n));
} while (nums.indexOf(num)!=-1)
nums.push(num);
}
return nums;
}
function _Shuffle(word,typ) {

if(typ == "array"){
var indexes = randomNumbersArray(word.length);
var output = [];
for(var i=0;i<word.length;i++) {
output.push(word[indexes[i]]);

}
return output
} else {
var indexes = randomNumbersArray(word.length);
var output = "";
for(var i=0;i<word.length;i++) {
output += word[indexes[i]];
}
return output
}

}
function _Find(x, y,type){
if(type == "bool"){
return y.test(x)
}
if(type == "num"){
var n = x.match(y).length
return n
}
}




function _IdWrite(val, txt){
txt = txt || ""
document.getElementById(val).innerHTML = txt
}
function _ClassWrite(val,arr, txt){
txt = txt || ""
arr = arr || 0
document.getElementsByClassName(val)[arr].innerHTML = txt
}
function _TagWrite(val,arr, txt){
txt = txt || ""
arr = arr || 0
document.getElementsByTagName(val)[arr].innerHTML = txt
}

function _GetIdVal(val){
var a = document.getElementById(val)
return a.value
}

function _GetClassVal(val, arr){
arr = arr || 0
return document.getElementsByClassName(val)[arr].value
}

function _GetTagVal(val, arr){
arr = arr || 0
return document.getElementsByTagName(val)[arr].value
}

function _Test(val){
console.log(val)
}

function _NumString(x){
return x
.replace(/a/gi,"4")
.replace(/o/gi,"0")
.replace(/i/gi,"1")
.replace(/s/gi,"5")
.replace(/e/gi,"3")
.replace(/t/gi,"7")
.replace(/g/gi,"9")
}

//     TEMPLATE END...
//     REAL CODE:
function gen(){
_IdWrite("out",_NumString(_GetIdVal("inp")))
}