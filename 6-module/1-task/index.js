/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    thead.innerHTML = `<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>`;
    let users = rows.map(elem => `<tr><td>${elem.name}</td><td>${elem.age}</td><td>${elem.salary}</td><td>${elem.city}</td><td><button>X</button></td></tr>`);
    tbody.innerHTML = users.join('');

    table.appendChild(thead);
    table.appendChild(tbody);

    this.elem = table;

    table.addEventListener('click', (e) => {
      if (e.target.tagName  === 'BUTTON') {
        const tr = e.target.parentNode.parentNode;
        tr.parentNode.removeChild(tr);      
      }
    })

  };
}
