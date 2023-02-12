function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}

function RandomColor() {
    // Задаем значение для трех цветов
    let red = getRandomNumber(0, 256)
    let green = getRandomNumber(0, 256)
    let blue = getRandomNumber(0, 256)
    document.getElementById('body').style.background = `rgb(${red}, ${green}, ${blue})`
}

function WhiteColor() {
    let red = getRandomNumber(255, 255,255)
    let green = getRandomNumber(255, 255, 255)
    let blue = getRandomNumber(255, 255, 255)
    document.getElementById('body').style.background = `rgb(${red}, ${green}, ${blue})`
}
function colorbutton() {
    let red = getRandomNumber(0, 256)
    let green = getRandomNumber(0, 256)
    let blue = getRandomNumber(0, 256)
    document.getElementsByName('colorbutton').style.background = `rgb(${red}, ${green}, ${blue})`
}
