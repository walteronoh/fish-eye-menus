async function loadData() {
    let response = await fetch("assets/json/wonders.json");
    return await response.json();
}

async function load() {
    const object = await loadData();
    // check if object is an instance of Array
    if (object instanceof Array) {
        // parse the data from json
        let menus = document.getElementById("header-menus");


        // iterate through the items
        object.forEach((value) => {
            // Create li element
            menus.innerHTML += `<li class="header-element" id="${value.name}" onclick="handleClick('${value.name}')"><div class="header-image"><span class="header-label">${value.label}</span><img src="assets/images/${value.image}" /></div></li>`;
        });

        // Set first menu as active
        let headerElements = document.querySelectorAll(`.header-element > div`);
        var span = document.createElement("span");
        // Set active menu
        span.classList.add("active");
        headerElements[0].appendChild(span)
        // Show description for the active menu
        createDescription(object[0]);
    }
}

load();

// set menu as active
async function handleClick(name) {
    // Remove the current active menu
    let elements = document.getElementsByClassName("active");
    if (elements.length > 0) {
        elements[0].classList.remove("active");
    }
    var div = document.querySelector(`#${name} > div`);
    var span = document.createElement("span");
    // Set active menu
    span.classList.add("active");
    div.appendChild(span);

    const data = await loadData();
    if (data instanceof Array) {
        let currentWonder = data.find((value) => value.name == name);
        createDescription(currentWonder);
    }
}

function createDescription(currentWonder) {
    let descriptionElement = document.getElementById("description");
    descriptionElement.innerHTML = `<div>
        <h2>${currentWonder.label}</h2>
        <img src="assets/images/${currentWonder.image}" />
        <p>${currentWonder.description}</p>
        <a href="${currentWonder.link}">Read More</a>
        </div>`;
}

// function fetchUsingAjax() {
//     let object = [];
//     var xhr = new XMLHttpRequest();

//     // open a connection
//     xhr.open("GET", "assets/json/wonders.json", true);

//     // send the request
//     xhr.send();

//     // handle the response
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // parse the data from json
//             object = JSON.parse(this.responseText);
//             let menus = document.getElementById("header-menus");

//             // check if object is an instance of Array before iterating
//             if (object instanceof Array) {
//                 // iterate through the items
//                 object.forEach((value) => {
//                     // Create li element
//                     menus.innerHTML += `<li class="header-element" onclick="handleClick('${value.name}')"><div class="header-image"><span class="header-label">${value.label}</span><img src="assets/images/${value.image}" /></div></li>`;
//                 });
//             }
//         }
//     }
// }