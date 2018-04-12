"use strict";
let $ = require('jquery');

let text = ["Happy", "Neutral", "Sad"];
let images = ["./images/happy.png", "./images/confused.png", "./images/sad.png"];

function show(){
    $('.container').html("");
    $(".container").append(`<div id="button-set"></div>`);

    

}

module.exports = {show};