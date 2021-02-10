"use strict";

function addLinkToButton(buttonId, pageURL) {
    document.getElementById(buttonId).addEventListener("click", function () {
        window.location = pageURL;
    });
}

addLinkToButton("mainPageButton", "https://hristov98.github.io/index.html");

addLinkToButton("invertebratesButton", "https://hristov98.github.io/html/animalSections/invertebrates.html");

addLinkToButton("loginButton", "https://hristov98.github.io/html/userControl/login.html");
addLinkToButton("registerButton", "https://hristov98.github.io/html/userControl/registration.html");
