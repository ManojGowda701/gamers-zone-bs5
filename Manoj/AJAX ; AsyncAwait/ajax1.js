//Create an XMLHttpRequest Object
// var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
//Configure the request
xhr.open('GET', 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20',true);
let i = 0;
//Set a callback function to handle the response
xhr.onreadystatechange = function () {
    i++;
    if(xhr.readyState === 4 && xhr.status === 200) {
        //Request is complete amd successful
        var response = JSON.parse(xhr.responseText);
        let container = document.getElementById('container')
        let arr = []
        response.results.forEach((item) => {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = item.name;
            arr.push(newDiv);
            // container.appendChild(newDiv);
            console.log(item);
        }) 
        container.append(...arr);
        // console.log(response);
    } else if (xhr.readyState === 4 && xhr.status != 200) {
        //Request completed but with an error
        console.log('Error', xhr.status);
    }
};
console.log(xhr.readyState)
//Send the request
xhr.send();

