$(document).ready(function () {
    "use strict";
    var canvas = $("#drawCanvas"); // елемент канвас
    var context = canvas.get(0).getContext("2d");
    var drawAllowed = false; // чи дозволене малювання в даний момент\
    canvas.width = 800; // розміри канвасу
    canvas.heigth = 800;
    context.fillStyle = "white";
    //context.fillRect(0, 0, canvas.width, canvas.heigth); // заливаємо канвас білим кольором
    context.lineWidth = 10;

    canvas.on("mousedown", function () { // при нажатті кнопки миші дозволяємо малювати
        drawAllowed = true;
    });

    canvas.on("mouseup", function () { // якщо кнопка відпущена - забороняємо малювати
        drawAllowed = false;
        context.beginPath();
    });

    canvas.on("mousemove", function () {
        if (event.ctrlKey) { // якщо зажата ctrl - перемикаємось на білий колір (своєобразна стирачка)
            context.fillStyle = "white";
            context.strokeStyle = "white";
        } else { // якщо контрол не зажатий - малюємо
            var idColor = document.getElementById('idColor').value;
            context.fillStyle = idColor;
            context.strokeStyle = idColor;
        }
        if (drawAllowed) { // перевіряємо, чи дозволене малювання в даний момент
            context.lineTo(event.offsetX, event.offsetY); // якщо швидко водити мишею - браузер не встигатиме намалювати велику кількість точок - тобі необхідно
            // з*єднувати їх лініями
            context.stroke(); // малюєм лінію
            context.beginPath();
            context.arc(event.offsetX, event.offsetY, 5, 0, Math.PI * 2); // малюємо точку
            context.fill();
            context.beginPath();
            context.moveTo(event.offsetX, event.offsetY); // переміщаємо поточну координату за мишею
        }
    }); // коли водимо над канвасом - малюємо, якщо є дозвіл

});