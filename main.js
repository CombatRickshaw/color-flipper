const colorDiv = document.querySelector('.color-container');
const button = document.querySelector('#color-button');

button.addEventListener('click', (event) => {
    
    let rgbArray = randomNumbers();
    let rgbVal = "background-color: rgb(" + rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2] + ");";
    colorDiv.setAttribute('style', rgbVal)
        
});


function randomNumbers() {
    let rgbArray = [];

    for (let i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 256))
    }
    return rgbArray;
}
