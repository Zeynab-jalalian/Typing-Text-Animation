const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Zeynab Jalalian";
    }, 0);
    setTimeout(() => {
        text.textContent = "a Front End Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "a Programmer";
    }, 8000);
}
textLoad();
setInterval(textLoad,12000);