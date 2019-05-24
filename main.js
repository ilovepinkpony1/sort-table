'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (event) => {

  if (event.target.parentNode === table.rows[0]) {

    let arr = [];
    for (let i = 1; i < table.rows.length; i++) {
      arr[i - 1] = {
        age: Number(table.rows[i].cells[0].textContent),
        name: table.rows[i].cells[1].textContent,
      }
    };

    arr.sort((a, b) => {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    });
    
    for (let i = 1; i < table.rows.length; i++) {
      table.rows[i].cells[0].textContent = arr[i - 1].age;
      table.rows[i].cells[1].textContent = arr[i - 1].name;
    };   
  }
})
