"use strict";
let $ = require('jquery');
let db = require('./databaseCalls');
let screens = require('./finalScreens');

let text = ["Not at all", "", "Kind of", "", "Very much"];
let rating = [1,2,3,4,5];

let images = ["./images/star.png"];

function show(answers, question){
    $('.container').html("");
    $("body").removeClass("bk-3");
    $("body").addClass("bk-2");
    $(".container").append(
        `<div class="entries" id="button-set">
            <div class="title answers">${question}</div>
            <div class="row"></div>
        </div>`);

    text.forEach((item, index)=>{
        $(".row").append(
            `<div class="card col-sm-2" id="${rating[index]}">
            <img class="card-img-top" src="${images[0]}" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${item}</p>
            </div>
        </div>
        `);
    });

// <img class="card-img-top" src="${images[0]}" id="${rating[index]}star" alt="Card image cap">

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