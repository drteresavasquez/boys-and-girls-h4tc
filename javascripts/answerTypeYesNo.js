"use strict";
let $ = require('jquery');

let text = ["Yes", "No"];
let images = ["./images/like.png", "./images/dislike.png"];
let db = require('./databaseCalls');

function show(answers){
    $('.container').html("");
    $(".container").append(`<div id="button-set"></div>`);

    text.forEach((item, index)=>{
        $("#button-set").append(`
        <div class="row">
        <div class="card col-sm-4" id="${item}">
        <img class="card-img-top" src="${images[index]}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${item}</p>
        </div>
      </div>
        </div>
        `);
    });

    $("#button-set .card").on('click', (e)=>{
        answers.answer = e.currentTarget.id;
        console.log(answers);
        db.putData(answers);
    });


}

module.exports = {show};