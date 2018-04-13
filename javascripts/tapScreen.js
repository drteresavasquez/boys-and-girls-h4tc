"use strict";
let surveyScreen = require("./surveyScreen");
let $ = require('jquery');
let allAges = require('./ages');

function show(answerObj) {
    $('.container').html("");
    $('.container').append(`
    <form>
      <img id="logo" src="./images/logo.png" alt="company logo" />
      <div class="form-group">
      <h2 id="feeling-sentance">Feeling Friday... we listen</h2>
      <button id="submit-btn" type="submit" class="btn-lg btn btn-primary ">Tap to begin</button>
      <button id="exit-btn" type="submit" class="btn-lg btn btn-primary ">Exit</button>
    </form>
    <p id="disclaimer">Children’s Privacy Statement: Data and information collected through this survey is de-identified and will be used to enhance Boys & Girls Club programs.  We will not intentionally collect or redistribute any personal information from children under the age of 18. If you think that we have collected personal information from a child under the age of 18, please contact your Club administrator.</p>
    `);
        $("#submit-btn").on('click', (e) => {
            e.preventDefault();
            allAges.makeAgeButtons(answerObj);
        });

        $("#exit-btn").on("click", (e)=>{
            document.cookie = `accessCode?`;
        });
}
module.exports = {
    show
};