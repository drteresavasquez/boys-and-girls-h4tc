"use strict";
let $ = require('jquery');
let screens = require('./finalScreens');

let text = ["Yes", "No"];
let images = ["./images/like.png", "./images/dislike.png"];
let db = require('./databaseCalls');

function show(answers, question){
    $('.container').html("");
    $("body").removeClass("bk-3");
    $("body").addClass("bk-2");
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
        console.log(answers);
        // db.putData(answers).then((response)=>{
        //     if(response > 199 && response < 300){
        //         console.log("YES!");
        screens.successScreen(answers);
        // }else{
        //     console.log("NOPE");
        //     screens.errorScreen();
        // }
    // });
    });


}

module.exports = {show};