
const container = document.querySelector('#container');

for (let i = 0; i<256; i++) {
const etchDiv = document.createElement('etchDiv');
container.classList.add('etchDiv');

etchDiv.setAttribute('id','boxes');

etchDiv.style.background = "pink";
etchDiv.style.border = "0px";
etchDiv.style.height = "30px";
etchDiv.style.width = "30px";

etchDiv.addEventListener('mouseover', () => etchDiv.style.background= "orange")

container.appendChild(etchDiv);
};


//function alertFunction() {
   // alert("how many boxes?")
//}
//btn.addEventListener('click', alertFunction);
function boxFunction() {
    let numOfBoxes = prompt("How many boxes?", "100");
    if (numOfBoxes > 0 && numOfBoxes < 101) {
        let boxes = numOfBoxes*numOfBoxes;
        let boxHeight = 480/numOfBoxes;
        let numOfPx = boxHeight + "px";
        for (let i = 0; i<boxes; i++) {
            const etchDiv = document.createElement('etchDiv');
            container.classList.add('etchDiv');
            
            etchDiv.setAttribute('id','boxes');
            
            etchDiv.style.background = "pink";
            etchDiv.style.border = "0px";
            etchDiv.style.height = numOfPx;
            etchDiv.style.width = numOfPx;
            
            etchDiv.addEventListener('mouseover', () => etchDiv.style.background= "orange")
            
            container.appendChild(etchDiv);
            };
    }
    else {
        alert("ERROR");
    }
}

