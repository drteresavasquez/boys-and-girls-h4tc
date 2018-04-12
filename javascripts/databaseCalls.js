"use strict";
let $ = require('jquery');

function getAccessCodeData(){
 return $.ajax({
     url: 'http://feelingfriday-stage.azurewebsites.net//api/accesscode'
    });
}

function getQuestionData(){
 return $.ajax({
     url: 'http://feelingfriday-stage.azurewebsites.net/api/survey'
    });
}

function putData(obj){
    console.log(obj);
}

module.exports = {getAccessCodeData, getQuestionData, putData};