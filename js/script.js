'use strict'


let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");

let myColor = "black"; //цвет
let brStyle = "round"; //тип кисти
let brush = 5; //размер кисти


//выбор цвета
document.getElementById("color").oninput = function () {
    myColor = this.value;
}


//выбор кисти
brush5x5.onclick = function () {
    brush = 5;
    brStyle = "square";
}
brush10x10.onclick = function () {
    brush = 10;
    brStyle = "square";
}
brush15x15.onclick = function () {
    brush = 15;
    brStyle = "square";
}
brush20x20.onclick = function () {
    brush = 20;
    brStyle = "square";
}
brush25x25.onclick = function () {
    brush = 25;
    brStyle = "square";
}
brushR5.onclick = function () {
    brush = 5;
    brStyle = "round";
}
brushR10.onclick = function () {
    brush = 10;
    brStyle = "round";
}
brushR15.onclick = function () {
    brush = 15;
    brStyle = "round";
}
brushR20.onclick = function () {
    brush = 20;
    brStyle = "round";
}
brushR25.onclick = function () {
    brush = 25;
    brStyle = "round";
}

//очистить лист
clear.onclick = function () {
    ctx.clearRect(0, 0, 1750, 900);
    console.log(brStyle);
}


//функция рисования
canvas.onmousedown = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = myColor;
    ctx.lineWidth = brush;
    ctx.lineCap = brStyle;
    ctx.stroke();
    ctx.beginPath();
    canvas.onmousemove = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
    }
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}

