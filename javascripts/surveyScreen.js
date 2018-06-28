"use strict";
let $ = require('jquery'),
    aObj = require('./answerObj'),
    db = require('./databaseCalls'),
    yesNo = require('./answerTypeYesNo'),
    happy = require('./answerTypeFeeling'),
    rate = require('./answerTypeRating'),
    questions = ["Did you enjoy your experience this week?"];

function show(answerObj){
    $(".container").html("");
    $("body").addClass("bk-2");

    let aType = [1,2,3,4];
    let random = aType[Math.floor(Math.random() * aType.length)];

    switch (random) {
        case 1:
            console.log("1");
            yesNo.show(answerObj, questions[0]);
            break;
        case 2:
            console.log("2");
            happy.show(answerObj, questions[0]);
            break;
        case 3:
            console.log("3");
            rate.show(answerObj, questions[0]);
            break;
        case 4:
            console.log("3");
            rate.show(answerObj, questions[0]);
            break;
        }
}

module.exports = { show };