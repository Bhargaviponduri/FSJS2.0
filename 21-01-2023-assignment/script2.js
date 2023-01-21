let body = document.querySelector('body')
let newDiv = document.createElement("div")

document.addEventListener('click', function addFunction(event) {
    let xcord = event.clientX;
    let ycord = event.clientY;
    //16,777,215 is the total possible combinations of RGB(255,255,255) which is 32 bit colour.
    //toString(16) is converting number to hexa decimal value
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.appendChild(newDiv);
    newDiv.classList.add('addStyling');
    console.log('random', randomColor)
    newDiv.style.backgroundColor = `#${randomColor}`
    newDiv.style.top = (ycord - 25) + 'px'
    newDiv.style.left = (xcord - 25) + 'px'
    addingTimeout()
})

const addingTimeout = () => {
    setTimeout(() => {
        newDiv.classList.remove('addStyling');
    }, 2000);
}