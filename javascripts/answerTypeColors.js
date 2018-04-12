"use strict";
let $ = require('jquery');

let text = ["Yes", "No"];
let images = ["./images/like.png", "./images/dislike.png"];

function show(){
    $('.container').html("");
    $(".container").append(`<div id="button-set"></div>`);

    

}

module.exports = {show};