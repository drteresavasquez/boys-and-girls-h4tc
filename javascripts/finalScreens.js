"use strict";

let $ = require('jquery');
// let tap = require('./tapScreen');
// let answers = require('./answerObj');

function successScreen() {
  console.log("Success");
  $('.container').html("");
  $('.container').append(`
    <form>
      <img id="logo" src="/images/logo.png" alt="company logo" />
      <h1 id="login-inst">Success!!!</h1>
     
      <button id="submit-btn" type="submit" class="btn btn-primary btn-lg">Submit</button>
    </form>
    `);
}

// function errorScreen() {
//   console.log("ERROR");
//   $('.container').html("");
//   $('.container').append(`
//   <form>
//     <img id="logo" src="/images/logo.png" alt="company logo" />
//     <h1 id="login-inst">ERROR!!!</h1>
   
//     <button id="submit-btn" type="submit" class="btn btn-primary btn-lg">Try Again</button>
//   </form>
//   `);

//   $('#submit-btn').on('click', ()=>{
//       tap.show(answers);
//   });
// }

module.exports = {
  successScreen,
  // errorScreen
};