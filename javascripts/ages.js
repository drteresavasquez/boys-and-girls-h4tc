"use strict";

let $ = require('jquery'),
    pageTitle = "Select Your Age Group";

console.log("ages.js here");

function makeAgeButtons(allAges) {
    let agesDiv;
    for (let ages in allAges) {
        let currentItem = allAges[ages];
        agesDiv = `<button id=${ages} class="btn btn-lg">${ages.name}</button>
                    <p>${ages.range}<p>`;
    }
    $("#container").append(agesDiv);
}

module.exports = { makeAgeButtons };
