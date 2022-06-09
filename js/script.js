'use strict'

let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");

let myColor = "black"; //цвет
let brStyle = "round"; //тип кисти или инструмента
let brush = 5; //размер кисти
let firstx, firsty; //начальные координаты
let x, y; //текущие координаты
let radius; //радиус круга


//выбор цвета
document.getElementById("color").oninput = function () {
    myColor = this.value;
}

//выбор инструмента
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
circle.onclick = function () {
    brStyle = "circle";
    brush = 15;
}
line5.onclick = function () {
    brStyle = "line";
    brush = 5;
}
line7.onclick = function () {
    brStyle = "line";
    brush = 7;
}
line10.onclick = function () {
    brStyle = "line";
    brush = 10;
}
line15.onclick = function () {
    brStyle = "line";
    brush = 15;
}
line20.onclick = function () {
    brStyle = "line";
    brush = 20;
}
line25.onclick = function () {
    brStyle = "line";
    brush = 25;
}

//очистить лист
clear.onclick = function () {
    ctx.clearRect(0, 0, 1750, 900);
}

//при нажатии ЛКМ ----------------------------------------
canvas.onmousedown = function (event) {
    // рисования кистью 
    if (brStyle == "round") {
        ctx.beginPath() //начало новой фигуры
        x = event.offsetX;
        y = event.offsetY;
        ctx.moveTo(x, y); //установка начальных координат
        ctx.lineTo(x, y); //установка координат для рисования
        ctx.strokeStyle = myColor;
        ctx.lineWidth = brush;
        ctx.lineCap = brStyle;
        ctx.stroke(); //отрисовка фигуры
    }
    // рисования круга
    if (brStyle == "circle") {
        ctx.beginPath();
        firstx = event.offsetX;
        firsty = event.offsetY;
        ctx.lineWidth = brush;
        ctx.strokeStyle = myColor;
        ctx.lineCap = "round";

    }
    //рисование линий
    if (brStyle == "line") {
        ctx.beginPath();
        x = event.offsetX;
        y = event.offsetY;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = myColor;
        ctx.lineWidth = brush;
        ctx.lineCap = "round";
        ctx.stroke();
    }

    //при движении мышки с зажатым ЛКМ------------------------------
    let postX, postY; //предыдущие координаты
    canvas.onmousemove = function (event) {
        //рисования кистью 
        if (brStyle == "round") {
            x = event.offsetX;
            y = event.offsetY;
            ctx.moveTo(postX, postY);
            ctx.lineTo(x, y);
            ctx.stroke();
            postX = x;
            postY = y;
        }
    }

    //при отпуске ЛКМ--------------------------------------
    canvas.onmouseup = function (event) {
        //рисование линий
        if (brStyle == "line") {
            x = event.offsetX;
            y = event.offsetY;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        //рисования круга
        if (brStyle == "circle") {
            x = event.offsetX;
            y = event.offsetY;
            ctx.beginPath();
            radius = Math.pow(Math.pow(x - firstx, 2) + Math.pow(y - firsty, 2), 0.5);
            ctx.arc(firstx, firsty, radius, 0, 2 * Math.PI, false);
            ctx.stroke();
        }
        canvas.onmousemove = null; //отмена отслеживания координат мышки
    }
}







