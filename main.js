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
    element.getElementsByClassName("content")[0].style.animation = "text-fade-in 2s";
    element.getElementsByClassName("content")[0].style.cursor = "default";
    element.getElementsByClassName("content")[0].style.fontSize = "0.5em";
    element.getElementsByClassName("content")[0].style.zIndex = "10";
    element.getElementsByClassName("content")[0].innerHTML = content[element.id];
    lastOpenedElement = element
    
}

function restoreContainer() {

    lastOpenedElement.getElementsByClassName("content")[0].style.cursor = "pointer";
    lastOpenedElement.getElementsByClassName("content")[0].style.fontSize = "1em";
    lastOpenedElement.getElementsByClassName("content")[0].style.zIndex = "0";
    lastOpenedElement.getElementsByClassName("content")[0].style.animation = "text-fade-in-2 1s";
    lastOpenedElement.getElementsByClassName("image")[0].style.animation = "unblur-image 1s";
    lastOpenedElement.getElementsByClassName("image")[0].style.filter = "blur(0px)";
    lastOpenedElement.getElementsByClassName("content")[0].innerHTML = title[lastOpenedElement.id];

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
    "info-container": "Just a guy. \nChose software development as a career, became passionate about fitness & strength training.\nMusic is probably even closer to my heart, but it will stay a hobby for now.",
    "dev-container": "Check out my GitHub repository to see my personal projects. <a href=\"https://github.com/ebenyu08?tab=repositories\" target=\"_blank\" class=\"fa fa-github\"></a>",
    "music-container": "Soon... or not",
    "fitness-container": "Sooner..."
}

var lastOpenedElement;