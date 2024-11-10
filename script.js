// script.js

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  function sortList() {
    const inputList = document.getElementById('inputList').value;
    const array = inputList.split(',').map(Number); // Converte para array de números
    
    if (array.some(isNaN)) {
      document.getElementById('sortedList').innerText = "Por favor, insira apenas números válidos!";
      return;
    }
  
    const sortedArray = bubbleSort(array);
    document.getElementById('sortedList').innerText = sortedArray.join(', ');
  }
  