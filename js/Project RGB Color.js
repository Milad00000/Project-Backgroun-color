let red = document.querySelector(".r");
let green = document.querySelector(".g");
let blue = document.querySelector(".b");
let num = document.querySelector(".num");
function color() {
	document.body.style.backgroundColor ='rgb(' + red.value + ',' + green.value + ',' + blue.value + ')' ;
	document.getElementById("num").innerHTML=  'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')' ;
}