"use strict";
let $ = require('jquery');
let db = require('./databaseCalls');
let screens = require('./finalScreens');


let text = ["Happy", "Neutral", "Sad"];
let images = ["./images/happy.png", "./images/confused.png", "./images/unhappy.png"];

function show(answers, question){
    $('.container').html("");
    $("body").removeClass("bk-3");
    $("body").addClass("bk-2");
    // $(".container").append(`<div class="title answers">${question}</div>`);
    $(".container").append(`<div class="entries" id="button-set">
    <div class="title answers">${question}</div>
        <div class="row">
        </div>
    </div>`);

    text.forEach((item, index)=>{
        $(".row").append(`
        <div class="card col-sm-3" id="${item}">
            <img class="card-img-top" src="${images[index]}" alt="Card image cap">
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