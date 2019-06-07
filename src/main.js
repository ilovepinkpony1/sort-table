'use strict';

window.addEventListener('load', sortTable);

function sortTable() {
  const table = document.querySelector('.table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', () => {
    const currSortCell = event.target.cellIndex;

    const arr = [...tbody.rows].map(tr => {
      return [...tr.cells].map(td => {
        return td.innerText;
      });
    });

    if (Number.isInteger(parseInt(arr[0][currSortCell]))) {
      arr.sort((a, b) => {
        if (Number(a[currSortCell]) > Number(b[currSortCell])) {
          return 1;
        }
        if (Number(a[currSortCell]) < Number(b[currSortCell])) {
          return -1;
        }
        return 0;
      });
    } else {
      arr.sort((a, b) => {
        if (a[currSortCell].toLowerCase() > b[currSortCell].toLowerCase()) {
          return 1;
        }
        if (a[currSortCell].toLowerCase() < b[currSortCell].toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }

    [...tbody.rows].forEach((tr, index) => {
      [...tr.cells].forEach((td, word) => {
        td.innerText = arr[index][word];
      });
    });
  });
}
