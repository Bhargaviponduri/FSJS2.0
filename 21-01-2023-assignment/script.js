
console.log("step1", document.querySelector('#ele'))

let body = document.querySelector('body')

document.addEventListener('click', function addFunction(event) {
    let xcord = event.clientX;
    let ycord = event.clientY;
    let newDiv = document.createElement("div")
    body.appendChild(newDiv);
    newDiv.classList.add('addStyling');
    newDiv.style.top = ycord + 'px'
    newDiv.style.left = xcord + 'px'
})
