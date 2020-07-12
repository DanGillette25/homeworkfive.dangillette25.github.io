$(document).ready(function(){

    if (localStorage.getItem('hoursOfDay')) {
        var existingSchedule = JSON.parse(localStorage.getItem("hoursOfDay"))
        hoursOfDay = existingSchedule
        makeCalendar()
    } else {

        var calString = JSON.stringify(hoursOfDay)
        localStorage.setItem("hoursOfDay", calString)
        var existingSchedule = JSON.parse(localStorage.getItem("hoursOfDay"))
        hoursOfDay = existingSchedule

        makeCalendar()

    }

    function makeCalendar() {

    for (var i = 0; i < hoursOfDay.length; i ++) {

        var hourDisplay = hoursOfDay[i].hour
        var agendaDisplay = hoursOfDay[i].agenda
        var nameElBtn = "button-name" + i
        var nameElIn = "input-name" + i
        var newLI = $("<li>")
        var newInput = $('<input type="text" class="agenda-box"/>');
        var newSpan = $('<span>')
        var saveBtn = $('<button class="app-button">')
        var markDone = $('<button value = "submit">')

        $(newInput).attr("value", agendaDisplay);
        $(newInput).attr("name", nameElIn);
        $(newSpan).text(hourDisplay)
        $("#base-ul").append(newLI);
        $(newLI).prepend(newSpan)
        $(newLI).append(newInput);
        $(saveBtn).text("Save");
        $(saveBtn).attr("name", nameElBtn);
        $(newLI).append(saveBtn);

    }

    $(".app-button").on("click", function(event) {

        event.preventDefault();

        var btnName = ($(this).attr("name"));
        var inputNumber = btnName.slice(-1);
        var inputName = "input-name" + inputNumber
        var inputToString = inputName.toString();
        var inputFinal = document.getElementsByName(inputToString);
        var inputInteger = parseInt(inputNumber);

        for (var i = 0; i < inputFinal.length; i++) {
            var textValue = inputFinal[i].value;
            
            hoursOfDay[inputInteger].agenda = textValue;
            var calString = JSON.stringify(hoursOfDay)
            localStorage.setItem("hoursOfDay", calString)

            
        
        }

        
        

        
    })

    }

})