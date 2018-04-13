"use strict";
let $ = require('jquery'),
fakeData = require('./fakeData'),
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
            //DO SOMETHING
            console.log("1");
            yesNo.show(answerObj, data.Question);
            // color.show(answerObj);
            // rate.show(answerObj);
            break;
        case 2:
            //DO SOMETHING
            console.log("2");
            happy.show(answerObj, data.Question);
            break;
        case 3:
            //DO SOMETHING
            console.log("3");
            rate.show(answerObj, data.Question);
            break;
        case 4:
            //DO SOMETHING
            console.log("3");
            rate.show(answerObj, data.Question);
            break;
        }
    });
}

module.exports = { show };