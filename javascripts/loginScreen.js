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
        <img id="logo" src="/images/logo.png" alt="company logo" />
        <h1 id="login-inst">Enter access code to begin</h1>
        <div class="form-group">
        <p>USE CODE: 123432</p>
            <input id="access-code" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" placeholder="ACCESS CODE">
        </div>
        
        <button id="submit-btn" type="submit" class="btn btn-primary btn-lg">Submit</button>
        </form>
        `);

        db.getAccessCodeData()
            .then((data) => {
                $("#submit-btn").on('click', (e) => {
                    e.preventDefault();
                    let inputVal = $('#access-code').val();
                    let yesVal = [];
                    data.forEach((item) => {
                        if (item == parseInt(inputVal)) {
                            // document.cookie = `accessCode?${item}`;
                            // let newArray = document.cookie.split("?");
                            // let code = newArray.pop();
                            // answers.accessCode = parseInt(code);
                            yesVal.push(item);
                        }
                    });

                    if (yesVal.length != 0) {
                        tap.show(answers);
                    } else {
                        show();
                        $(".form-group").append(`<div class="error-message">Please Try Again</div>`);
                    }
                });
            });
}

module.exports = {
    show
};