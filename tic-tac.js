// let playerText = document.getElementById("playerText");
// let restartBtn = document.getElementById("restartBtn");
// let boxes = Array.from(document.getElementsByClassName('box'));

// let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

// const x_text = "x";
// const o_text = "o";
// let currentPlayer = x_text;
// let spaces = Array(9).fill(null);

// const startGame = () => {
//     boxes.forEach(box => box.addEventListener('click', boxClicked));
// }

// function boxClicked(e) {
//     const id = e.target.id;
//     if (!spaces[id]) {
//         spaces[id] = currentPlayer;
//         e.target.innerText = currentPlayer;

//         const winning_blocks = playerHasWon();
//         if (winning_blocks) {
//             playerText.innerText = `${currentPlayer} has won!`;
//             winning_blocks.forEach(box => boxes[box].style.backgroundColor = winnerIndicator);
//             return;
//         }
//         currentPlayer = currentPlayer === x_text ? o_text : x_text;
//     }
// }

// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// function playerHasWon() {
//     for (const condition of winningCombos) {
//         let [a, b, c] = condition;
//         if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
//             return [a, b, c];
//         }
//     }
//     return false;
// }

// restartBtn.addEventListener('click', restart);

// function restart() {
//     spaces.fill(null);
//     boxes.forEach(box => {
//         box.innerText = "";
//         box.style.backgroundColor = '';
//     });
//     playerText.innerText = 'Tic Tac Toe';
//     currentPlayer = x_text;
// }

// startGame();




function arrayStatistics(arr) {
    if (arr.length === 0) return null;
  
    // Sum
    let sum = arr.reduce((acc, val) => acc + val, 0);
  
    // Average
    let average = sum / arr.length;
  
    // Maximum
    let max = Math.max(...arr);
  
    // Minimum
    let min = Math.min(...arr);
  
    // Median
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let mid = Math.floor(sortedArr.length / 2);
    let median = sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  
    return {
      sum: sum,
      average: average,
      max: max,
      min: min,
      median: median
    };
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const stats = arrayStatistics(numbers);
  console.log(`Sum: ${stats.sum}`);
  console.log(`Average: ${stats.average}`);
  console.log(`Maximum: ${stats.max}`);
  console.log(`Minimum: ${stats.min}`);
  console.log(`Median: ${stats.median}`);
  
