"use strict";

let loginScreen = require("./loginScreen");
let tap = require('./tapScreen');
let answers = require('./answerObj');
let $ = require('jquery');

console.log(document.cookie);
let cookieArray = document.cookie.split(";");
let last = cookieArray.pop();
let lastInt = last.split("?").pop();

if(last.length < 18){
    loginScreen.show();
}else {
    answers.accessCode = parseInt(lastInt);
    tap.show(answers);
}