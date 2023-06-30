let vikas={
    subject:"maths",
    marks:94
}
if(vikas.marks>=35){
if(vikas.marks>=90){
    vikas.grade = "S";
}else if(vikas.marks >= 70 && vikas.marks <90){
    vikas.grade ="A";
}else if(vikas.marks >=60 && vikas.marks < 70){
    vikas.grade = "B";
}else{
    vikas.grade = "C";
}
}else{
    vikas.grade = "F"
console.log(vikas.subject+"failed")
}
console.log(vikas)