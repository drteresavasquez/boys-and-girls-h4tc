"use strict";
let $ = require('jquery'),
    aObj = require('./answerObj'),
    db = require('./databaseCalls'),
    yesNo = require('./answerTypeYesNo'),
    happy = require('./answerTypeFeeling'),
    rate = require('./answerTypeRating');

function show(answerObj){
    db.getQuestionData().then((data)=>{
    $(".container").html("");

    switch (data.AnswerType) {
        case 1:
            console.log("1");
            yesNo.show(answerObj, data.Question);
            break;
        case 2:
            console.log("2");
            happy.show(answerObj, data.Question);
            break;
        case 3:
            console.log("3");
            rate.show(answerObj, data.Question);
            break;
        case 4:
            console.log("3");
            rate.show(answerObj, data.Question);
            break;
        }
    });
}

module.exports = { show };