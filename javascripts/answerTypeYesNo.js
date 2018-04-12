"use strict";
let $ = require('jquery');

function show(){
    $('.container').html("");
    $(".container").append(`<div id="button-set"></div>`);


    // base.images.forEach((item, index)=>{
    //     $('.container').append(`<button value="${base.item.text}"><img src="${base.item.images}" /></button>`);
    // });
        
    // }
}

module.exports = {show};