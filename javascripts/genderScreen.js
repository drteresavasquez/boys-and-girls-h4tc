"use strict";
let $ = require('jquery'),
    survey = require('./surveyScreen');

let gender = ["Male", "Female", "No answer"],
    images = ["./images/boy.png", "./images/girl.png"],
    pageTitle = "Gender";

function show(answers) {
    $(".container").html("");
    $("body").removeClass("bk-4");
    $("body").addClass("bk-3");
    $(".container").append(`<div id="button-set">
    <div class="title answers">${pageTitle}</div>
        <div class="row">
        </div>
    </div>`);

    let last = gender.pop();
    gender.forEach((item, index) => {
        $(".row").append(`
        <div class="card col-sm-4 thumb-cards" id="${item}">
            <img class="card-img-top gender" src="${images[index]}" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${item}</p>
            </div>
        </div>
        `);
    });

    $("#button-set").append(`<button type="button" id=${last} value="${last}" class="last-btn-item">${last}</button>`);

    $("#button-set .card").on('click', (e) => {
        answers.gender = e.currentTarget.id;
        survey.show(answers);
    });

    $("#button-set button").on('click', (e) => {
        answers.gender = e.currentTarget.value;
        survey.show(answers);
    });

}

module.exports = { show };