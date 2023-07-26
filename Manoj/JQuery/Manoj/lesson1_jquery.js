const docCb = function() {

    $("#foo").css("background-color", "yellow");
const divCb1 = () => {
    alert('Hi there!');
}
    $("#id2").click(divCb1);


    const Cb2 = () => {
        alert('Cursor is in!');
     }
    
    $("#id3").mouseenter(Cb2);


    const Cb3 = () => {
        $("#home").attr("data-author-name", "Sumanth");
     }
        $("button").click(Cb3);


        const replace = function(){
            $("p").replaceWith("<h1>This is new heading</h1>");
         }
        $("#b1").click(replace);


        const addElements = function(){
            $(".inner").append("<p>Zara</p>");
        }
        $("button").click();

const anime = function(){
    $("div").animate({left: '250px'});
 }
        $("#right").click(anime);


        const anime2 = function(){
            $("div").animate({left: '0px'});
         }
        $("#left").click(anime2);

    $(".foo").css("background-color", "blue");
 }
$(document).ready(docCb);

 