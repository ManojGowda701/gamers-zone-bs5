//get the URL of the data
let url = 'https://www.boredapi.com/api/activity/';
console.log(url);

//Fetch API method for getting requests
let fetch_Res = fetch(url);
//fetch variable is the promise to resolve response using.then() method.
//display data as an output
fetch_Res
.then(resp => resp.json())
.then(res => {
    
})


