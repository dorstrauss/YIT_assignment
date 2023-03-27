//VARIABLES:
const image = document.querySelector(".add-image-dialog");
const categoryInput = document.querySelector(".category-input");
const titleInput = document.querySelector(".title-input");
const subtitleInput = document.querySelector(".subtitle-input");
const creditInput = document.querySelector(".credit-input");
const form = document.querySelector(".form-container");
const imageToDisplay = document.getElementById("image-input");

let src = "";

//image upload
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

function handleSelected() {
    const selectedFile = fileInput.files[0];

    reader.addEventListener("load", () => {
        src = reader.result

    }, false);

    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
    } else {
        console.log("no file selected yet")
    }
}

fileInput.addEventListener('change', handleSelected);

// Get the CSRF token from the HTML form
const csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

//INSERT DATA PAGE
const onFormSubmit = (event) => {
    event.preventDefault();
    let formObject = {
        id: "",
        image: src,
        category: categoryInput.value,
        title: titleInput.value,
        subTitle: subtitleInput.value,
        credit: creditInput.value,
    }

    fetch('http://127.0.0.1:8000/API/save_form/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken //added the csrf token to the request headers
        },
        body: JSON.stringify({
            formObject
        })
    })
        .then(response => response.json())
        .then(() => {
            modal.classList.remove("none");
        })
        .catch((error) => console.log(error))

}

form.addEventListener("submit", onFormSubmit)

