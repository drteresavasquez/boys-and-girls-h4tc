"use strict";
let surveyScreen = require("./surveyScreen");
let $ = require('jquery');
let allAges = require('./ages');

function show(answerObj) {
    $('.container').html("");
    $('.container').append(`
    <form>
      <img id="logo" src="/images/logo.png" alt="company logo" />
      <div class="form-group">
      <button id="submit-btn" type="submit" class="btn-lg btn btn-primary ">Tap To Begin</button>
    </form>
    `);
        $("#submit-btn").on('click', (e) => {
            e.preventDefault();
            allAges.makeAgeButtons(answerObj);
        });
}
module.exports = {
    show
};