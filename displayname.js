let names=[ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let i=0;
document.getElementById("num").innerHTML=i+1;
document.getElementById("name").innerHTML=names[i];
function nxtName(){
    i++;
    if(i>=names.length){
        i=0;
    }
    document.getElementById("num").innerHTML=i+1;
    document.getElementById("name").innerHTML=names[i];
}
document.getElementById("nxt").onclick=nxtName;
function preName(){
i--;
if(i<0)
{
    i=names.length-1;
}
document.getElementById("num").innerHTML=i+1;
document.getElementById("name").innerHTML=names[i];
}
document.getElementById("prvs").onclick=preName;