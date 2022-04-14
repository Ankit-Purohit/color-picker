const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colo=document.getElementById("colo");

const btn=document.getElementsByClassName("btn");

btn.addEventListener("click",change);
function change(){

    const randomNum=getran();
    let first="#";
    for(let i=0;i<6;i++){
        first=first+colors[getran()];
    }
    document.body.style.backgroundColor=first;
    colo.textContent=first;


}

function getran(){
    return Math.floor(Math.random()*colors.length); 
}