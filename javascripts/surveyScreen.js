"use strict";
let $ = require('jquery'),
fakeData = require('./fakeData'),
    db = require('./databaseCalls'),
    yesNo = require('./answerTypeYesNo');
    
function show(answerObj){
    db.getData();

    console.log(fakeData.fakeData);
    switch (fakeData.fakeData.AnswerType) {
        case 1:
            //DO SOMETHING
            console.log("1");
            break;
        case 2:
            //DO SOMETHING
            console.log("2");
            yesNo.show();
            answerObj.answer = "yes";
            db.putData(answerObj);
            break;
        case 3:
            //DO SOMETHING
            console.log("3");
            break;
        case 4:
            //DO SOMETHING
            console.log("4");
            break;
    }

}

module.exports = { show };