//Insert data page vars:
const imageSelectTag = document.querySelector(".select-image");
const categorySelectTag = document.querySelector(".select-category");
const titleSelectTag = document.querySelector(".select-title");
const subtitleSelectTag = document.querySelector(".select-subtitle");
const creditSelectTag = document.querySelector(".select-credit");
const optionsSaveBtn = document.querySelector(".options-btn-save");
const optionsSuccessBtn = document.querySelector(".success-btn");
let optionsData;
//SELECT DATA PAGE
//render options to select data page:
const renderOptions = (optionsArray, selectClass) => {
    const select = document.querySelector(`.${selectClass}`);
    optionsArray.forEach((element, i) => {
        const option = document.createElement("option");
        option.value = element;
        option.innerHTML = element;
        select.appendChild(option)
    });
}

//fetch options json:
window.addEventListener('DOMContentLoaded', () => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            optionsData = data;
        })
        .then(() => {
            // console.log(optionsData)
            renderOptions(optionsData.imageArray || dummyData.image, "select-image");
            renderOptions(optionsData.categoryArray || dummyData.category, "select-category");
            renderOptions(optionsData.titleArray || dummyData.title, "select-title");
            renderOptions(optionsData.subtitleArray || dummyData.subtitle, "select-subtitle");
            renderOptions(optionsData.creditArray || dummyData.credit, "select-credit");

        })
        .catch((error) => console.log(error));
})


let displayObject = {
    id: "",
    image: "image",
    category: "category",
    title: "title",
    subtitle: "subtitle",
    credit: "credit",
}

imageSelectTag.addEventListener("change", (e) => {
    displayObject.image = e.target.value
})
categorySelectTag.addEventListener("change", (e) => {
    displayObject.category = e.target.value
})
titleSelectTag.addEventListener("change", (e) => {
    displayObject.title = e.target.value
})
subtitleSelectTag.addEventListener("change", (e) => {
    displayObject.subtitle = e.target.value
})
creditSelectTag.addEventListener("change", (e) => {
    displayObject.credit = e.target.value
})

optionsSuccessBtn.addEventListener("click", () => {
    modal.classList.add("none");
})

optionsSaveBtn.addEventListener("click", () => {
    modal.classList.remove("none");
    displayObject = {
        id: "",
        image: imageSelectTag.value || "image",
        category: categorySelectTag.value || "category",
        title: titleSelectTag.value || "title",
        subtitle: subtitleSelectTag.value || "subtitle",
        credit: creditSelectTag.value || "credit",
    }

    window.localStorage.setItem("displayObject", JSON.stringify(displayObject));
})
