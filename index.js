const textareaEl = document.getElementById("textarea");

const toEl = document.getElementById("total-counter");

const remEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    toEl.innerText = textareaEl.value.length;
    remEl.innerText = textareaEl.getAttribute("maxlength" ) -
    textareaEl.value.length;
}