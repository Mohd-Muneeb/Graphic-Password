/* Code written and developed by Mohd Muneeb */
//Steps for this to work

console.log("Hello");

// //Steps for this to work
//----------------------------------------//
//Get images to load
//Copy the images in an array
//Get the images in a random order
//Display randomized order
//Get final output
//---> work on Selecting and Deselecting
//Compare copy and final output function
//After Effects of solving
//-->We need to work this shit
//---------------------------------------//

var images = ['image-1.webp', 'image-2.png', 'image-3.png', 'image-4.jpg', 'image-5.png', 'image-6.png', 'image-7.png', 'image-8.jpg', 'image-9.jpg'];

var userDetail;
function generateImages(username, prototypeImages) {

    userDetail = sessionStorage.getItem("Username");
    console.log(userDetail);
    if (userDetail === null) {

        alert('No username');

    } else {

        document.getElementById('first-heading').innerHTML = "Welcome " + userDetail;
    }

    //Get the images in here in form of an array

}

generateImages();


// We Need the images to run from here

//Uncomment here to get start the random generator

var imagesTitle = [];

function titleGenerator() {
    var length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        imageTitle = "";

    for (var i = 0, n = charset.length; i < length; ++i) {
        imageTitle += charset.charAt(Math.floor(Math.random() * n));
    }
    imagesTitle.push(imageTitle);
}

function getImages() {
    for (i = 0; i <= 8; i++) {
        titleGenerator();
    }
}

getImages();

var copyImages = [];
var copyImageTitles = [];
var finalArray = [];
// console.log(images);

function randomizer() {

    //copy retrieved images into a temp array copy

    let i = 0;
    imagesTitle.forEach(element => {
        copyImages[i] = element;
        i++;
    });

    i = 0;

    images.forEach(element => {
        copyImageTitles[i] = element;
        i++;
    })



    //randomize original array

    for (var k = imagesTitle.length - 1; k > 0; k--) {

        // Generate random number
        var j = Math.floor(Math.random() * (k + 1));

        var temp = imagesTitle[k];
        imagesTitle[k] = imagesTitle[j];
        imagesTitle[j] = temp;

        var temp2 = images[k];
        images[k] = images[j];
        images[j] = temp2;

    }

    //Shuffled titles of the images in the original array
    // console.log(images);
}

//Calling random function

randomizer();

//Load to HTML page and assign functionality

function display() {

    //load elements to html

    for (i = 0; i <= imagesTitle.length - 1; i++) {
        var passwordChoices = document.createElement('option');

        //EDIT THIS TO DISPLAY THEM IMAGES MUNEEB , For Fucks Sake

        passwordChoices.innerHTML = imagesTitle[i];

        // passwordChoices.innerHTML = <img src="test-images/image2.jpg"></img>;
        // console.log(images[i]);
        document.getElementById("option-holder").appendChild(passwordChoices)

        //Setting properties

        Object.assign(passwordChoices, {
            className: 'my-image-class',
            id: imagesTitle[i],

            //Add Event Listeners

            onclick: function () {

                if (finalArray.length <= copyImages.length - 1) {

                    finalArray.push(this.id);
                    console.log(finalArray);
                    this.setAttribute("class", "selected");
                }
                else {
                    alert("array is full bruh lmao");
                }

            }
        })
    }
}

display();

class CustomSelect {
    constructor(originalSelect) {
        this.originalSelect = originalSelect;
        this.customSelect = document.createElement("div");
        this.customSelect.classList.add("select");

        let convertableOptions = (this.originalSelect.querySelectorAll("option"));

        for (i = 0; i <= imagesTitle.length - 1; i++) {
            const itemElement = document.createElement("div");

            itemElement.classList.add("select__item");
            // itemElement.setAttribute("id", convertableOptions[i].innerHTML);
            // console.log(formItems[0].children);
            itemElement.textContent = convertableOptions[i].textContent;

            //You added the image Here boy

            itemElement.innerHTML = `<img src = "/components/test-images/${userDetail}/${images[i]}" style = "max-height: 200px; max-width: 200px;">`
            this.customSelect.appendChild(itemElement);

            if (convertableOptions[i].selected) {
                this._select(itemElement);
            }

            itemElement.addEventListener("click", () => {
                if (
                    this.originalSelect.multiple &&
                    itemElement.classList.contains("select__item--selected")
                ) {
                    this._deselect(itemElement);
                } else {
                    this._select(itemElement);
                }
            });
        }

        this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
        this.originalSelect.style.display = "none";
    }

    _select(itemElement) {
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        if (!this.originalSelect.multiple) {
            this.customSelect.querySelectorAll(".select__item").forEach((element) => {
                element.classList.remove("select__item--selected");
            });
        }

        this.originalSelect.querySelectorAll("option")[index].selected = true;
        itemElement.classList.add("select__item--selected");

        if (finalArray.length <= copyImages.length - 1) {

            //I am pushing shit from here Bro

            finalArray.push(imagesTitle[index]);
            console.log(finalArray);
            // this.setAttribute("class", "selected");
        }
        else {
            alert("array is full bruh lmao");
        }

    }

    _deselect(itemElement) {
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        this.originalSelect.querySelectorAll("option")[index].selected = false;
        itemElement.classList.remove("select__item--selected");
        //Delete here if you fuck up
        finalArray.splice(finalArray.indexOf(itemElement.id), 1);

    }
}

//This is to make those elements

const formItems = document.querySelectorAll(".custom-select")
// console.log(formItems);

for (i = 0; i <= imagesTitle.length - 1; i++) {
    new CustomSelect(formItems[i]);
}
// console.log(copyImages);

const submit = document.getElementById('submitBtn');

submit.addEventListener("click", () => {

    //This works perfectly well for me
    if (copyImages.join('') == finalArray.join('')) {
        // console.log("they cool lmao");
        alert("yeah you got it right");
        window.location.href = "https://graphic-password.netlify.app/views/dashboard.html";

    }
    else {
        console.log("bruh wrong pass")
        alert("Get out bro");
        wrongPassword();
    }

}

);

//Deselect of a element

// let selectedItem = document.getElementsByClassName("selected");
// selectedItem.addEventListener("click", deselect())

// function deselect() {
//         // this.setAttribute
//         console.log("clicked on selected items")
// }

//On solving

function solved() {
    alert("You got it right")
    
}

//On getting password wrong

function wrongPassword() {
    // sessionStorage.clear();
    // window.location.href = "/views/index.html"
}

// function encrypter(titleText){

// }

