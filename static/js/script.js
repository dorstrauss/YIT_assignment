//VARIABLES:
//component page vars:
const category = document.querySelector(".category");
const mainTitle = document.querySelector(".main-title");
const subtitle = document.querySelector(".subtitle");
const credit = document.querySelector(".credit");
const homeContainer = document.querySelector(".home-container");

//COMPONENT PAGE
//get object from local storage:
let newDisplayObject = JSON.parse(window.localStorage.getItem("displayObject"));

const renderHtml = (dataObject) => {

    console.log('DOM fully loaded and parsed');
    const html = dataObject ?
        `
    <img class="main-image" src="${dataObject.image !== "image" ? dataObject.image : "./assets//ef3-placeholder-image.jpg"}" alt="Placeholder">
    <div class="content-container">
    <div class="category">${dataObject.category}</div>
    <div class="main-title">${dataObject.title}</div>
    <div class="subtitle">${dataObject.subtitle}</div>
    <div class="credit">${dataObject.credit}</div>
    </div>
    `
        :
        `
    <img class="main-image" src="./assets//ef3-placeholder-image.jpg" alt="Placeholder">
    <div class="content-container">
    <div class="category">Category</div>
    <div class="main-title">Title</div>
    <div class="subtitle">Subtitle</div>
    <div class="credit">Credit</div>
    </div>
    `
    homeContainer.insertAdjacentHTML("beforeend", html);
}

window.addEventListener('DOMContentLoaded', renderHtml(newDisplayObject));
