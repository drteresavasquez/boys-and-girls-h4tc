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
        <label for="exampleInputEmail1">Email address</label>
        <input id="access-code" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button id="submit-btn" type="submit" class="btn btn-primary">Submit</button>
    </form>
    `);

    $("#submit-btn").on('click', (e)=>{
        e.preventDefault();
        if(accessCode === parseInt($('#access-code').val())){
            console.log("You can enter");
        }
    });
    
}



module.exports = { show };