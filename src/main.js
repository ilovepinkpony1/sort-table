'use strict';

window.addEventListener('load', sortTable);

function sortTable() {
  const table = document.querySelector('.table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', () => {
    const arr = [];
      [...tbody.rows].forEach(tr => {
      const result =  [...tr.cells].map(td => {
        return td.innerText;
      })
      arr.push(result)
    })
    
    arr.sort((a, b) => {
      if (Number(a[0]) > Number(b[0])) {
        return 1;
    }
      if (Number(a[0]) < Number(b[0])) {
        return -1;
    }
        return 0;
    });

    [...tbody.rows].forEach((tr, index) => {
      [...tr.cells].forEach((td, word) => {
        td.innerText = arr[index][word];
      })
    })
  })
}
