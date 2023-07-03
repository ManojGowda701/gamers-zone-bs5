console.log ("this is external js")
console.assert (4 > 3 , "wrong answer")
console.assert (20<15 , "wrong answer")

console.log("This is from external file")


setTimeout(() => {
    console.log(document.getElementById("fav_games"))
    console.log(document.getElementById("popular_games"))
    console.log(document.querySelector(".fav"))
    console.log(document.querySelectorAll(".card"))
    console.log(document.querySelectorAll(".fav"))
    console.log(document.querySelector(".card"))
    console.log(document.getElementsByClassName("popular_game"))
    console.log(document.getElementsByTagName("section"))

    document.getElementsByClassName("popular_game")[1].style.backgroundColor = "red"
    
    document.title = "ExcleR"

}, 1000)
