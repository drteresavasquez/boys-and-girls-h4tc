"use strict";
let surveyScreen = require("./surveyScreen");
let $ = require('jquery');
let dummyCode = 12345;
let allAges = require('./ages');
let answers = require('./answerObj');
let db = require('./databaseCalls');

function show(){
    $('.container').html("");
    $('.container').append(`
    <form>
      <div class="form-group">
        <input id="access-code" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" placeholder="ACCESS CODE">
      </div>
     
      <button id="submit-btn" type="submit" class="btn btn-primary">Submit</button>
    </form>
    `);

    $("#submit-btn").on('click', (e)=>{
        e.preventDefault();

        db.getAccessCodeData().then((data)=>{
            console.log(data);
        });

        if(dummyCode === (parseInt($('#access-code').val()))){
            answers.accessCode = dummyCode;
            console.log(answers);
            allAges.makeAgeButtons(answers);          
        }else{
            show();
            $(".form-group").append(`<div class="error-message">Please Try Again</div>`);
        }
    });
    
}



module.exports = { show };