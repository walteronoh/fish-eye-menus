async function loadData() {
    let response = await fetch("assets/json/wonders.json");
    return await response.json();
}

async function load() {
    let object = [];
    var xhr = new XMLHttpRequest();

    // open a connection
    xhr.open("GET", "assets/json/wonders.json", true);

    // send the request
    xhr.send();

    // handle the response
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // parse the data from json
            object = JSON.parse(this.responseText);
            let menus = document.getElementById("header-menus");

            // check if object is an instance of Array before iterating
            if (object instanceof Array) {
                // iterate through the items
                object.forEach((value) => {
                    // Create li element
                    menus.innerHTML += `<li class="header-element" onclick="handleClick('${value.name}')"><div class="header-image"><span class="header-label">${value.label}</span><img src="assets/images/${value.image}" /></div></li>`;
                });
            }
        }
    }
}

load();

// set menu as active
async function handleClick(name) {
    const data = await loadData();
    if (data instanceof Array) {
        let currentWonder = data.find((value) => value.name == name);
        let descriptionElement = document.getElementById("description");
        descriptionElement.innerHTML = `<div>
        <h3>${currentWonder.label}</h3>
        <p>${currentWonder.description}</p>
        <a href="${currentWonder.link}">Read More</a>
        </div>`;
    }
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