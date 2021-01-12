// Write your code here!
let main = document.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.innerHTML("H1");
document.body.appendChild(newHeader);
newHeader.className("victory");

newHeader.innerHTML += "victory";
newHeader.innerHTML += "is the champion";