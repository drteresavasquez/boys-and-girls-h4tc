"use strict";
let $ = require('jquery'),
    survey = require('./surveyScreen');

let gender = ["Male", "Female", "No Answer"],
    pageTitle = "Gender";

function show(answers){
    $(".container").html("");
    var genderDiv = document.createElement("div");
    $(".container").append(genderDiv);
    genderDiv.classList.add("gender-div");
    $(".gender-div").append(`<div class="title gender-title">${pageTitle}</div>`);
    $(".gender-div").append(`<div id="gender-btn-set"></div>`);
    let last = gender.pop();
    gender.forEach((item)=>{
        $("#gender-btn-set").append(`
            <button type="button" value="${item}" id=${item} class="gender-btn btn btn-lg">${item}</button><br>
        `);
    });

    $("#gender-btn-set").append(`<button type="button" id=${last} value="${last}" class="no-gender-btn last-btn-item">${last}</button>`);

    $("#gender-btn-set button").on('click', (e)=>{
        answers.gender = e.currentTarget.value;
        survey.show(answers);
    });

}

module.exports = { show };