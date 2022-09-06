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

  function holidayColor() {
    let feriadosDias = document.querySelectorAll(".holiday");
    let butao = document.querySelector("#btn-holiday");
    let corInicial = "rgb(238,238,238)"
    let novaCor = "red"

    butao.addEventListener("click", function() {
      for (let index = 0; index < feriadosDias.length; index += 1) {

        if (feriadosDias[index].style.backgroundColor === novaCor) {
          feriadosDias[index].style.backgroundColor = corInicial;
        }
        else {
          feriadosDias[index]. style.backgroundColor = novaCor;
        }
      }
    })
  }

  holidayColor();

  function createFridayButton(buttonName) {

    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID

    buttonContainer.appendChild(newButton);
  }

  createFridayButton('Sexta-feira');

  function changeTextFriday(fridaysArray) {
    let fridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOOU'

    fridayButton.addEventListener("click", function() {
      for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
        } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
  }

  let decemberFridays = [ 4, 11, 18, 25 ];
  changeTextFriday(decemberFridays);

  function dayMouseOver() {
    let days = document.getElementsByClassName('day');
    for (let index = 0; index < days.length; index += 1) {
      days[index].addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '50px';
        event.target.style.fontWeight = '600';
      })
    } 
  }
  
  function dayMouseOut() {
    let days = document.getElementsByClassName('day');
    for (let index = 0; index < days.length; index += 1) {
      days[index].addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
      })
    }
    
  }

  dayMouseOver();
  dayMouseOut();

 



  