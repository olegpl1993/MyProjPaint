'use strict'

//адаптив и создание канваса
let cWidth = document.documentElement.clientWidth; //шырина екрана
let cHight = document.documentElement.clientHeight; //высота екрана

document.querySelector(".workSpace").innerHTML = `<canvas id="c1" width="${cWidth - 115}px" height="${cHight - 3}px"></canvas>`;


//инициализация канваса--------------------
let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");
//-----------------------------------------

//создание переменных----------------------
let myColor = "black"; //цвет
let brStyle = "round"; //тип кисти или инструмента
let brush = input.value; //размер кисти
let firstx, firsty; //начальные координаты
let x, y; //текущие координаты
let radius; //радиус круга
//-----------------------------------------

//панель инструментов-------------------------
document.getElementById("color").oninput = function () {
    myColor = this.value; //выбор цвета
}
input.oninput = function () { //срабатывает при вводе
    if (input.value > 99) {
        input.value = 99;
    }
    brush = input.value; //толщина линии
}
brushR.onclick = function () {
    brStyle = "round"; //кисть
}
circle.onclick = function () {
    brStyle = "circle"; //круг
}
line.onclick = function () {
    brStyle = "line"; //линия
}
clear.onclick = function () {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); //очистить лист
}
//--------------------------------------------


//при нажатии ЛКМ (Рисование) ----------------------------------------
canvas.onmousedown = function clickdown(event) {
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
    canvas.onmousemove = function move(event) {
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
    canvas.onmouseup = function clickup(event) {
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


/*  ДОДЕЛАТЬ СЕНСОРНОЕ УПРАВЛЕНИЕ!!!!!!!!!!!!!!!!!
//тач скрин --------------------------------------------------------------------
let rect;
canvas.addEventListener("touchstart", event => {
    console.log("клик");
    // рисования кистью 
    if (brStyle == "round") {
        ctx.beginPath() //начало новой фигуры
        rect = event.target.getBoundingClientRect();
        x = event.targetTouches[0].pageX - rect.left;
        y = event.targetTouches[0].pageY - rect.top;
        ctx.moveTo(x, y); //установка начальных координат
        ctx.lineTo(x, y); //установка координат для рисования
        ctx.strokeStyle = myColor;
        ctx.lineWidth = brush;
        ctx.lineCap = brStyle;
        ctx.stroke(); //отрисовка фигуры
    }

    // рисования круга
    if (brStyle == "circle") {
        ctx.beginPath(); //начало новой фигуры
        rect = event.target.getBoundingClientRect();
        firstx = event.targetTouches[0].pageX - rect.left;
        firsty = event.targetTouches[0].pageY - rect.top;
        ctx.lineWidth = brush;
        ctx.strokeStyle = myColor;
        ctx.lineCap = "round";
    }

    //рисование линий
    if (brStyle == "line") {
        ctx.beginPath(); //начало новой фигуры
        rect = event.target.getBoundingClientRect();
        x = event.targetTouches[0].pageX - rect.left;
        y = event.targetTouches[0].pageY - rect.top;
        ctx.moveTo(x, y); //установка начальных координат
        ctx.lineTo(x, y); //установка координат для рисования
        ctx.strokeStyle = myColor;
        ctx.lineWidth = brush;
        ctx.lineCap = "round";
        ctx.stroke(); //отрисовка фигуры
    }

    //при движении мышки с зажатым ЛКМ------------------------------
    let postX, postY; //предыдущие координаты
    canvas.addEventListener("touchmove", event => {
        console.log("мув");
        //рисования кистью 
        if (brStyle == "round") {
            rect = event.target.getBoundingClientRect();
            x = event.targetTouches[0].pageX - rect.left;
            y = event.targetTouches[0].pageY - rect.top;
            ctx.moveTo(postX, postY);
            ctx.lineTo(x, y);
            ctx.stroke();
            postX = x;
            postY = y;
        }
    })

    //при отпуске ЛКМ--------------------------------------
    canvas.addEventListener("touchend", event => {
        console.log("ап");
        //рисование линий
        if (brStyle == "line") {
            rect = event.target.getBoundingClientRect();
            x = event.targetTouches[0].pageX - rect.left;
            y = event.targetTouches[0].pageY - rect.top;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        //рисования круга
        if (brStyle == "circle") {
            ctx.beginPath();
            rect = event.target.getBoundingClientRect();
            x = event.targetTouches[0].pageX - rect.left;
            y = event.targetTouches[0].pageY - rect.top;
            radius = Math.pow(Math.pow(x - firstx, 2) + Math.pow(y - firsty, 2), 0.5);
            ctx.arc(firstx, firsty, radius, 0, 2 * Math.PI, false);
            ctx.stroke();
        }
        canvas.touchmove = null; //отмена отслеживания координат мышки
    })
})
*/



