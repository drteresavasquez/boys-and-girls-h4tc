"use strict";

let $ = require('jquery');
let main = require('./main');
function successScreen(answerObj) {
  console.log("Success");
  $('.container').html("");
  $('.container').append(`
    <form>
      <img id="logo" src="./images/check.png" alt="success check" />
      <h1 id="login-inst">Success!!!</h1>
    </form>
    `);

    setTimeout(function(){ 
      location.reload();
    }, 3000);
}

function errorScreen() {
  console.log("ERROR");
  $('.container').html("");
  $('.container').append(`
  <form>
    <img id="logo" src="./images/dislike.png" alt="company logo" />
    <h1 id="login-inst">ERROR. Please Try Again.</h1>
   
    <button id="submit-btn" type="submit" class="btn btn-primary btn-lg">Try Again</button>
  </form>
  `);

  $('#submit-btn').on('click', ()=>{
      location.reload();
  });
}

module.exports = {
  successScreen,
  errorScreen
};