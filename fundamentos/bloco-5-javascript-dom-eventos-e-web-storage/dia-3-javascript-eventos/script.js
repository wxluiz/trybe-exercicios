function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
    let daylist = document.querySelector("#days");
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let day = decemberDaysList[index];
        let addDay = document.createElement("li");
        addDay.innerHTML = day;

        if (day === 24 || day === 31) {
            addDay.className = "day holiday";
            daylist.appendChild(addDay);
        }

        else if (day === 4 || day === 11 || day === 18) {
            addDay.className = "day friday";
            daylist.appendChild(addDay);
        }
        
        else if (day === 25) {
            addDay.className = "day holiday friday";
            daylist.appendChild(addDay);
        }

        else {
            addDay.className = "day";
            daylist.appendChild(addDay);
        }
    }
  }

  createDaysOfTheMonth();

  function CreateHolidayButton(buttonName) {
    let buttonPai = document.querySelector(".buttons-container");
    let newButton = document.createElement("button");
    let idNewButton = "btn-holiday";

    newButton.innerHTML = buttonName;
    newButton.id = idNewButton;

    buttonPai.appendChild(newButton);
  }

  CreateHolidayButton("Feriados");
