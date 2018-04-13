"use strict";
let genderScreen = require("./genderScreen");


let $ = require('jquery'),
    pageTitle = "Select Your Age Group",
    allAges = require("./allAges");

console.log("ages.js here");

function makeAgeButtons(answers) {
    $(".container").html("");
    $(".container").append(`<div class="title">${pageTitle}</div>`);
    $(".container").append(`<div id="button-set"></div>`);
    let agesDiv;
    allAges.forEach((item)=>{
        $("#button-set").append(`<button id=${item.btnText} value="${item.btnText}" class="btn btn-lg">${item.btnText}</button>
        <p class="subheading">${item.subHeading}<p>`);
    });

    $("#button-set button").on('click', (e)=>{
        answers.ageGroup = e.currentTarget.value;
        genderScreen.show(answers);
    });
}

module.exports = { makeAgeButtons };
