function handleSelection(event){
    alert("Sorry, you can't select the content.");

    event.preventDefault();
}

function handleRightClick(event){
    alert("Right clicking the site is strictly prohibited.");
    event.preventDefault();
}
document.addEventListener("selectstart", handleSelection);

document.addEventListener("contextmenu", handleRightClick)