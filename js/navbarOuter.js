"use strict";

var cookies = document.cookie.split(";");

for (let i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i];
    let equalIndex = keyValue.indexOf("=");
    let key = equalIndex > -1 ? keyValue.substr(0, equalIndex) : keyValue;

    document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

function addLinkToButton(buttonId, pageURL) {
    document.getElementById(buttonId).addEventListener("click", function () {
        window.location = pageURL;
    });
}

addLinkToButton("mainPageButton", "https://hristov98.github.io/index.html");
addLinkToButton("loginButton", "https://hristov98.github.io/html/login.html");
addLinkToButton("registerButton", "https://hristov98.github.io/html/registration.html");

function addActionToNavbarButton(buttonId, category) {
    document.getElementById(buttonId).addEventListener("click", function () {
        document.cookie = `selectedSection = ${category}; path=/`;
        window.location = "https://hristov98.github.io/html/animalSection.html";
    });
}

addActionToNavbarButton("invertebratesButton", "Invertebrate");
addActionToNavbarButton("crustaceansButton", "Crustacean");
addActionToNavbarButton("fishButton", "Ocean Fish");
addActionToNavbarButton("sharksButton", "Shark");
addActionToNavbarButton("reptilesButton", "Reptile");
addActionToNavbarButton("mammalsButton", "Mammal");
