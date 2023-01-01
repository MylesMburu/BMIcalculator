
function calculate(){
    const x = document.getElementById('weight').value;
    const y = document.getElementById('height').value;
     const z = x/(y*y);
    //weight/(height*height)
    document.getElementById("output").innerHTML = z;

}
function reset(){
    
document.getElementById('weight').value = " "
document.getElementById('height').value = " "
document.getElementById("output").innerHTML = " ";
}

 