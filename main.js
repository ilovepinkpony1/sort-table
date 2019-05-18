'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (event) => {

  if (event.target === table.rows[0].cells[0]) {

    let arr = [];
    for (let i = 1; i < table.rows.length; i++) {
      arr[i - 1] = 
      {
        age: table.rows[i].cells[0].innerHTML,
        name: table.rows[i].cells[1].innerHTML,
      }
    };

    arr.sort(function (a, b) {
      if (+a.age > +b.age) {
        return 1;
      }
      if (+a.age < +b.age) {
        return -1;
      }
      return 0;
    });
    
    for (let i = 1; i < table.rows.length; i++) {
      table.rows[i].cells[0].innerHTML = arr[i - 1].age;
      table.rows[i].cells[1].innerHTML = arr[i - 1].name;
    };   
  }
})


