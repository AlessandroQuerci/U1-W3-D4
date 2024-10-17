const subBtn = document.getElementById("userBtn");
const bigTable = document.getElementById("numTable");

const celle = function () {
  for (let i = 0; i < 90; i++) {
    const intCelle = document.createElement("div");
    intCelle.classList.add("cell");
    const numCelle = document.createElement("h3");
    numCelle.classList.add("numbers");
    numCelle.innerText = i + 1;
    bigTable.appendChild(intCelle);
    intCelle.appendChild(numCelle);
  }
};
celle();

subBtn.onclick = function(){
    const numX = Math.ceil(Math.random()*90);
    const numbers = document.getElementsByClassName("numbers");
    const 
    if (numX === numbers){
        
    }
} 