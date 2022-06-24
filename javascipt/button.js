document.getElementById("demo").addEventListener("click",abc);
function abc(){
    document.getElementById("demo").style.background="red";
}
document.getElementById("demo").addEventListener("dblclick",xyz);
function xyz(){
    document.getElementById("demo").style.background="skyblue";
}
document.getElementById("demo").addEventListener("contextmenu",pqr);
function pqr(){
    document.getElementById("demo").style.background="royalblue";
}
document.getElementById("demo").addEventListener("mouseover",hover);
function hover(){
    document.getElementById("demo").style.background="darkblue";
}
document.getElementById("demo").addEventListener("mouseout",mouseout);
function mouseout(){
    document.getElementById("demo").style.background="black";
}
document.getElementById("demo").addEventListener("mousedown",moused);
function moused(){
    document.getElementById("demo").style.background="orange";
}
document.getElementById("demo").addEventListener("mouseup",mouseu);
function mouseu(){
    document.getElementById("demo").style.background="black";
}
function alert1(){
    alert("Thank you for feedback");
}
let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=="AC"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            screen.value=eval((screenValue));
        }
        else {
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    })

}