"use strict";
let $ = require('jquery'),
 theObject = require('./answerTypeObj');

function show(){
    let base = theObject.answerTypes[0];
    $('.container').html("");
    $(".container").append(`<div id="button-set"></div>`);

    console.log(base.images);

    // base.images.forEach((item, index)=>{
    //     $('.container').append(`<button value="${base.item.text}"><img src="${base.item.images}" /></button>`);
    // });
        
    // }
}

module.exports = {show};