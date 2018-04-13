"use strict";
let $ = require('jquery');

function getAccessCodeData(){
 return $.ajax({
     url: 'https://feelingfriday-stage.azurewebsites.net/api/accesscode'
    });
}

function getQuestionData(){
 return $.ajax({
     url: 'https://feelingfriday-stage.azurewebsites.net/api/survey'
    });
}

function putData(obj){
    return $.ajax({
        url: `https://feelingfriday-stage.azurewebsites.net/api/survey`,
        method: 'POST',
        data: obj,
        dataType: "json"
    }).done((data)=>{
        console.log(data);
    });
}

module.exports = {getAccessCodeData, getQuestionData, putData};