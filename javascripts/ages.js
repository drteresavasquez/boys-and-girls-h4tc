"use strict";
let answers = require('./answerObj');
let genderScreen = require("./genderScreen");


let $ = require('jquery'),
    pageTitle = "Select Your Age Group",
    allAges = require("./allAges");

console.log("ages.js here");

function makeAgeButtons() {
    $(".container").html("");
    $(".container").append(`<div class="title">${pageTitle}</div>`);
    $(".container").append(`<div id="button-set"></div>`);
    let agesDiv;
    allAges.forEach((item)=>{
        $("#button-set").append(`<button id=${item.btnText} value="${item.btnText}" class="btn btn-lg">${item.btnText}</button>
        <p>${item.subHeading}<p>`);
    });

    $("#button-set button").on('click', (e)=>{
        answers.ageGroup = e.currentTarget.value;
        genderScreen.show(answers);
    });
}

module.exports = { makeAgeButtons };
