"use strict";

let $ = require('jquery');

function successScreen(){
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

module.exports = { successScreen };