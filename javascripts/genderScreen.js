"use strict";
let $ = require('jquery'),
    answers = require('./answerObj');

let gender = ["Male", "Female", "No Answer"],
    pageTitle = "Gender";

function show(){
    $(".container").html("");
    $(".container").append(`<div class="title">${pageTitle}</div>`);
    $(".container").append(`<div id="button-set"></div>`);
    let last = gender.pop();
    gender.forEach((item)=>{
        $("#button-set").append(`
            <button type="button" value="${item}" id=${item} class="btn btn-lg">${item}</button><br>
        `);
    });

    $("#button-set").append(`<button type="button" id=${last} value="${last}" class="last-btn-item">${last}</button>`);

    $("#button-set button").on('click', (e)=>{
        console.log(e.currentTarget.value);
        answers.gender = e.currentTarget.value;
        console.log(answers);
    });

}

module.exports = { show };