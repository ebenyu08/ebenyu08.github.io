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
        element.getElementsByClassName("image")[0].style.backgroundPosition = "center right";
    } else {
        element.getElementsByClassName("image")[0].style.backgroundPosition = "center center";
    }

    element.getElementsByClassName("content")[0].style.animation = "text-fade-in 2s";
    element.getElementsByClassName("content")[0].style.cursor = "default";
    element.getElementsByClassName("content")[0].style.fontSize = "0.6em";
    element.getElementsByClassName("content")[0].style.zIndex = "10";
    element.getElementsByClassName("content")[0].style.height = "auto";
    element.getElementsByClassName("content")[0].style.paddingTop = "20px";
    element.getElementsByClassName("content")[0].style.paddingBottom = "20px";
    element.getElementsByClassName("content")[0].style.marginTop = "0";
    element.getElementsByClassName("content")[0].style.background = "rgba(0, 0, 0, 0.3)";
    element.getElementsByClassName("text-content")[0].innerHTML = content[element.id];

    if (element.id === "info-container") {
        element.getElementsByClassName("content")[0].style.alignItems = "end";
        element.getElementsByClassName("content")[0].style.textAlign = "right";
    }

    lastOpenedElement = element
    
}

function restoreContainer() {

    lastOpenedElement.getElementsByClassName("content")[0].style.cursor = "pointer";
    lastOpenedElement.getElementsByClassName("content")[0].style.fontSize = "1em";
    lastOpenedElement.getElementsByClassName("content")[0].style.zIndex = "0";
    lastOpenedElement.getElementsByClassName("content")[0].style.animation = "text-fade-in-2 1s";
    lastOpenedElement.getElementsByClassName("image")[0].style.animation = "unblur-image 1s";
    lastOpenedElement.getElementsByClassName("image")[0].style.filter = "blur(0px)";

    if (window.innerWidth < 800) {
        lastOpenedElement.getElementsByClassName("image")[0].style.backgroundSize = "140vw";
        lastOpenedElement.getElementsByClassName("image")[0].style.backgroundPosition = "center right";
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

    ids.filter(id => id != lastOpenedElement.id).forEach(id => {
        console.log(id);
        var element = document.getElementById(id);
        element.style.flex = "1";
    });
}

var ids = ["info-container", "dev-container", "music-container", "fitness-container"];
var title = { 
    "info-container": "About Me",
    "dev-container": "Development",
    "music-container": "Music",
    "fitness-container": "Fitness"
}
var content = {
    "info-container": "Slightly addicted to coffee. \nChose software development as a career, \nbecame passionate about fitness & strength training.\nMusic is probably even closer to my heart, \nbut it will stay as a hobby for now.",
    "dev-container": "Check out my GitHub repository to see my personal projects. \n <a href=\"https://github.com/ebenyu08?tab=repositories\" target=\"_blank\" class=\"fa fa-github\"></a>",
    "music-container": "Soon... or not",
    "fitness-container": "Sooner..."
}

var lastOpenedElement;