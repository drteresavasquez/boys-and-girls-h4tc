"use strict";
let $ = require('jquery');
let screens = require('./finalScreens');

let text = ["Yes", "No"];
let images = ["./images/like.png", "./images/dislike.png"];
let db = require('./databaseCalls');

function show(answers, question){
    $('.container').html("");
    $(".container").append(`<div id="button-set">
    <div class="title answers">${question}</div>
        <div class="row">
        </div>
    </div>`);

    text.forEach((item, index)=>{
        $(".row").append(`
        <div class="card col-sm-4 thumb-cards" id="${item}">
            <img class="card-img-top thumbs" src="${images[index]}" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${item}</p>
            </div>
        </div>
        `);
    });

    $("#button-set .card").on('click', (e)=>{
        answers.answer = e.currentTarget.id;
        screens.successScreen(answers);
    });


}

module.exports = {show};
