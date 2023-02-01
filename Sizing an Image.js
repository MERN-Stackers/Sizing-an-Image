let imageWidthElement = document.getElementById("imageWidth");
let imageElement = document.getElementById("image");
let warningMessageElement = document.getElementById("warningMessage");

let maxWidth = 300;
let minWidth = 100;
let originalWidth = 200;

let maxWarningMessage = "Too big, Decrease the image";
let minWarningMessage = "Not visible, Increase the image";

imageElement.style.width = originalWidth + "px";
imageWidthElement.textContent = originalWidth + "px";

function onIncrement(){
    if (originalWidth >= maxWidth){
        warningMessageElement.textContent = maxWarningMessage;
    }else{
        originalWidth = originalWidth + 5;
        let updatedImageWidth = originalWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
        }
}

function onDecrement(){
    if (originalWidth <= minWidth){
        warningMessageElement.textContent = minWarningMessage;
    }else{
        originalWidth = originalWidth - 5;
        let updatedImageWidth = originalWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
        }
}