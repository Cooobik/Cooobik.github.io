$(document).ready(function () {
    "use strict";
    var loadBut = $("#Downloadd");
    var isVisible = false; // для "перемикача"
    var TeamBlock = $("#Team"); // блок, у який вставимо таблицю
    TeamBlock.css("display", "none"); // на початку ховаємо таблицю
    loadBut.on("click", function () { // показати або сховати таблицю
        $.ajax({
            url: "GangTeam.json",
            success: function (result) { // результат разу розпарсений
                var i;
                var table = "<table class='table'><tr class='row1'><th class='cell'> Number </th><th class='cell'></th>";
                for (i = 0; i < result.length; i += 1) { // "заповнюємо" таблицю
                    table += "<tr class='row'><td class='cell'>" + result[i].first_name + " " + result[i].last_name + " "
                     "</td></tr>";
                }
                table += "</table>";
                $("#Team").html(table); // вставляємо таблицю
            }
        });
        if (isVisible) { // якщо таблицю показано - ховаємо і навпаки
            loadBut.html("Show table");
            TeamBlock.css("display", "none");
        } else {
            loadBut.html("Hide table");
            TeamBlock.css("display", "block");
        }
        isVisible = !isVisible; // для організації "перемикача" присвоюємо булевій змінній протилежне значення
    });
});