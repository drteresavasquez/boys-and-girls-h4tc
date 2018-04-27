"use strict";
let surveyScreen = require("./surveyScreen");
let $ = require('jquery');
let dummyCode = 12345;
let allAges = require('./ages');
let answers = require('./answerObj');
let db = require('./databaseCalls');
var regex = /^([+-]?[1-9]\d*|0)$/;
let tap = require('./tapScreen');

function show() {
    $('.container').html("");
    $('.container').append(`
        <form>
        <img id="logo" src="./images/logo.png" alt="company logo" />
        <h1 id="login-inst">Enter access code to begin</h1>
        <p>Use Code: 12345</p>
        <div class="form-group">
            <input id="access-code" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" placeholder="ACCESS CODE">
        </div>
        
        <button id="submit-btn" type="submit" class="btn btn-primary btn-lg">Submit</button>
        </form>
        `);

 
            $("#submit-btn").on('click', (e) => {
                e.preventDefault();
                let inputVal = $('#access-code').val();
                let yesVal = [];
                    if (dummyCode == parseInt(inputVal)) {
                        document.cookie = `accessCode?${dummyCode}`;
                        console.log("cookie", document.cookie);
                        answers.accessCode = dummyCode;
                        yesVal.push(dummyCode);
                    }

                if (yesVal.length != 0) {
                    tap.show(answers);
                } else {
                    show();
                    $(".form-group").append(`<div class="error-message">Please Try Again</div>`);
                }
            });
}

module.exports = {
    show
};