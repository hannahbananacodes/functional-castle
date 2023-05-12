const container = document.querySelector('#container');

for (let i = 0; i<256; i++) {
const etchDiv = document.createElement('etchDiv');
container.classList.add('etchDiv');

etchDiv.setAttribute('id','boxes');

etchDiv.style.background = "pink";
etchDiv.style.border = "0px solid black";
etchDiv.style.height = "30px";
etchDiv.style.width = "30px";

etchDiv.addEventListener('mouseover', () => etchDiv.style.background= "orange")

container.appendChild(etchDiv);
};

