function fullScreen(element) {
    console.log(element.id);
    ids.filter(id => id != element.id).forEach(id => {
        var elementById = document.getElementById(id);
        elementById.style.flex = "0";
    });
    changeContent(element);
}

function changeContent(element) {
    element.getElementsByClassName("image")[0].style.animation = "blur-image 1s";
    element.getElementsByClassName("image")[0].style.filter = "blur(4px)";

    if (window.innerWidth < 800) {
        element.getElementsByClassName("image")[0].style.backgroundPosition = "right right";
    } else {
        element.getElementsByClassName("image")[0].style.backgroundPosition = "center center";
    }

    element.getElementsByClassName("content")[0].style.animation = "text-fade-in 2s";
    element.getElementsByClassName("content")[0].style.cursor = "default";
    element.getElementsByClassName("content")[0].style.fontSize = "0.6em";
    element.getElementsByClassName("content")[0].style.zIndex = "5";
    element.getElementsByClassName("content")[0].style.height = "100%";
    element.getElementsByClassName("content")[0].style.paddingTop = "20px";
    element.getElementsByClassName("content")[0].style.paddingBottom = "20px";
    element.getElementsByClassName("content")[0].style.marginTop = "0";
    element.getElementsByClassName("content")[0].style.background = "rgba(0, 0, 0, 0.3)";
    element.getElementsByClassName("text-content")[0].innerHTML = content[element.id];
    element.style.pointerEvents = "none";

    if (element.id === "info-container") {
        element.getElementsByClassName("content")[0].style.alignItems = "center";
        element.getElementsByClassName("content")[0].style.textAlign = "center";
    }

    showBackButton();

    lastOpenedElement = element
    
}

function showBackButton() {
    var backButton = document.getElementById("back-button");
    backButton.style.opacity = "1";
}

function restoreContainer() {

    lastOpenedElement.getElementsByClassName("content")[0].style.cursor = "pointer";
    lastOpenedElement.getElementsByClassName("content")[0].style.fontSize = "1em";
    lastOpenedElement.getElementsByClassName("content")[0].style.zIndex = "0";
    lastOpenedElement.getElementsByClassName("content")[0].style.animation = "text-fade-in-2 1s";
    lastOpenedElement.getElementsByClassName("image")[0].style.animation = "unblur-image 1s";
    lastOpenedElement.getElementsByClassName("image")[0].style.filter = "blur(0px)";

    if (window.innerWidth < 800) {
        lastOpenedElement.getElementsByClassName("image")[0].style.backgroundSize = "130vh";
        lastOpenedElement.getElementsByClassName("image")[0].style.backgroundPosition = "right right";
        lastOpenedElement.getElementsByClassName("content")[0].style.height = "60%";
    } else {
        lastOpenedElement.getElementsByClassName("image")[0].style.backgroundSize = "cover";
        lastOpenedElement.getElementsByClassName("image")[0].style.backgroundPosition = "center center";
        lastOpenedElement.getElementsByClassName("content")[0].style.height = "auto";
        lastOpenedElement.getElementsByClassName("content")[0].style.marginTop = "50vh";
    }

    lastOpenedElement.getElementsByClassName("content")[0].style.paddingTop = "0px";
    lastOpenedElement.getElementsByClassName("content")[0].style.paddingBottom = "0px";
    lastOpenedElement.getElementsByClassName("content")[0].style.paddingRight = "0px";
    lastOpenedElement.getElementsByClassName("content")[0].style.background = "none";
    lastOpenedElement.getElementsByClassName("content")[0].style.alignItems = "center";
    lastOpenedElement.getElementsByClassName("content")[0].style.textAlign = "center";
    lastOpenedElement.getElementsByClassName("text-content")[0].innerHTML = title[lastOpenedElement.id];
    lastOpenedElement.style.pointerEvents = "auto";

    ids.filter(id => id != lastOpenedElement.id).forEach(id => {
        console.log(id);
        var element = document.getElementById(id);
        element.style.flex = "1";
    });

    hideBackButton();
    lastOpenedElement = null;
}

function hideBackButton() {
    var backButton = document.getElementById("back-button");
    backButton.style.opacity = "0";
}

function applyHungarian() {
    content = {
        "info-container": "Üdv a személyes honlapomon! \n\nNégy része van az oldalnak: \n1. Itt vagy most \n2. Ez a személyes projektjeimhez vezet \n3. Ha eljön az idő, akkor itt megtalálhatóak lesznek a zenéim \n4. Itt a személyi edzői oldalamról tudhatsz meg többet",
        "dev-container": "Github profilomon megtekinthetőek a személyes projektjeim. \n <a href=\"https://github.com/ebenyu08?tab=repositories\" target=\"_blank\" class=\"fa fa-github\"></a>",
        "music-container": "Hamarosan...",
        "fitness-container": "Ősztől..."
    }

    if (lastOpenedElement !== null) {
        lastOpenedElement.getElementsByClassName("text-content")[0].innerHTML = content[lastOpenedElement.id];
    }
}

function applyEnglish() {
    content = {
        "info-container": "Welcome to my personal website! \n\nThere are four sections: \n1. You are here \n2. This leads you to a few of my personal projects \n3. I will share my music here, when the time is right \n4. Find info about my personal trainer endeavors",
        "dev-container": "Check out my GitHub repository to see my personal projects. \n <a href=\"https://github.com/ebenyu08?tab=repositories\" target=\"_blank\" class=\"fa fa-github\"></a>",
        "music-container": "Soon... or not",
        "fitness-container": "This fall..."
    }

    if (lastOpenedElement !== null) {
        lastOpenedElement.getElementsByClassName("text-content")[0].innerHTML = content[lastOpenedElement.id];
    }
}

var ids = ["info-container", "dev-container", "music-container", "fitness-container"];
var title = { 
    "info-container": "",
    "dev-container": "",
    "music-container": "",
    "fitness-container": ""
}
var content = {
    "info-container": "Welcome to my personal website! \n\nThere are four sections: \n1. You are here \n2. This leads you to a few of my personal projects \n3. I will share my music here, when the time is right \n4. Find info about my personal trainer endeavors",
    "dev-container": "Check out my GitHub repository to see my personal projects. \n <a href=\"https://github.com/ebenyu08?tab=repositories\" target=\"_blank\" class=\"fa fa-github\"></a>",
    "music-container": "Soon... or not",
    "fitness-container": "This fall..."
}

var backgrounds = {
    "info-container": "url('./resources/images/me.jpg')",
    "dev-container": "url('./resources/images/dev.jpg')",
    "music-container": "url('./resources/images/drums.jpg)",
    "fitness-container": "url('./resources/images/fitness.jpg')"
}

var backgroundGifs = {
    "info-container": "url('./resources/images/me.jpg')",
    "dev-container": "url('./resources/images/dev.webp')",
    "music-container": "url('./resources/images/music.webp')",
    "fitness-container": "url('./resources/images/squat.webp')"
}

var lastOpenedElement = null;