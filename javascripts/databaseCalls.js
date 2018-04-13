"use strict";
let $ = require('jquery');

function getAccessCodeData(){
 return $.ajax({
     url: 'http://feelingfriday-stage.azurewebsites.net/api/accesscode'
    });
}

function getQuestionData(){
 return $.ajax({
     url: 'http://feelingfriday-stage.azurewebsites.net/api/survey'
    });
}

function putData(obj){
    return $.ajax({
        url: `http://feelingfriday-stage.azurewebsites.net/api/survey`,
        method: 'POST',
        data: obj,
        // data: obj,
        dataType: "json"
    }).done((data)=>{
        console.log(data);
    });
}

module.exports = {getAccessCodeData, getQuestionData, putData};