"use strict";
let surveyScreen = require("./surveyScreen");
let $ = require('jquery');
let accessCode = 12345;

function show(){
    console.log("show");
    // PLACE FORM HERE
    $('.container').append(`
    Copy
    <form>
      <div class="form-group">
        <input id="access-code" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" placeholder="ACCESS CODE">
      </div>
     
      <button id="submit-btn" type="submit" class="btn btn-primary">Submit</button>
    </form>
    `);

    $("#submit-btn").on('click', (e)=>{
        e.preventDefault();
        if(accessCode === parseInt($('#access-code').val())){
           $(".container").append("You can enter");
        }
    });
    
}



module.exports = { show };