'use strict'


let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");

let pi = Math.PI; //pi
let myColor = "black"; //цвет
let brStyle = "round"; //тип кисти
let brush = 5; //размер кисти


//выбор цвета
document.getElementById("color").oninput = function () {
    myColor = this.value;
}


//выбор кисти, инструмента
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
circle.onclick = function () {
    brStyle = "circle";
}

//очистить лист
clear.onclick = function () {
    ctx.clearRect(0, 0, 1750, 900);
}



canvas.onmousedown = function (event) {
    //функция рисования кистью
    if (brStyle == "round" || brStyle == "square") {
        ctx.beginPath()
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = myColor;
        ctx.lineWidth = brush;
        ctx.lineCap = brStyle;
        ctx.stroke();
    }
    //функция рисования круга
    if (brStyle == "circle") {
        ctx.beginPath();
        var firstx = event.offsetX;
        var firsty = event.offsetY;
    }
    canvas.onmousemove = function (event) {
        //функция рисования кистью 
        if (brStyle == "round" || brStyle == "square") {
            let x = event.offsetX;
            let y = event.offsetY;
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
        }
        //функция рисования круга
        if (brStyle == "circle") {
            var x = event.offsetX;
            var y = event.offsetY;
            ctx.lineWidth = 10;
            ctx.strokeStyle = myColor;
            var radius = Math.pow(Math.pow(x - firstx, 2) + Math.pow(y - firsty, 2), 0.5);
            ctx.arc(firstx, firsty, radius, 0, 2 * pi, false);
            ctx.stroke();
        }
    }
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}

