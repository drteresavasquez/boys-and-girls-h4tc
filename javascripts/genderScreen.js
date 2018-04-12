"use strict";
let $ = require('jquery');

let gender = ["Male", "Female", "No Answer"],
    pageTitle = "Gender";

function show(){
    $(".container").html("");
    $(".container").append(`<div class="title">${pageTitle}</div>`);
    let last = gender.pop();
    gender.forEach((item)=>{
        $(".container").append(`
            <button type="button" id=${item} class="btn btn-lg">${item}</button><br>
        `);
    });
    $(".container").append(`<div class="sub-item">${last}</div>`);
}

module.exports = { show };