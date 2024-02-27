function load() {
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
        if(object instanceof Array) {
            // iterate through the items
            object.forEach((value) => {
                // Create a li element
                menus.innerHTML += `<li class="header-element"><div class="header-image"><p class="header-label">${value.label}</p><img src="assets/images/${value.image}" /></div></li>`;
            });
        }
      }
    }
}

load();