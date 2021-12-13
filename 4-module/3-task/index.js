function highlight(table) {
  // ваш код...

  for (let i = 0; i < table.tBodies[0].rows.length ; i++) {

    const Row = table.tBodies[0].rows[i];
    const Age = Row.cells[1];
    const Gender = Row.cells[2];
    const Status = Row.cells[3];

    if (Age.innerHTML < 18) {
      Row.style = 'text-decoration: line-through'
    };

    if (Gender.innerHTML == 'm') { 
      Row.classList.add('male') 
    } else {
      Row.classList.add('female')
    };

    switch (Status.dataset.available) {
      case "true":
        Row.classList.add('available');
        break;
      case "false":
        Row.classList.add('unavailable');
        break;
      case undefined:
        Row.hidden = true;
    };
  }

}
