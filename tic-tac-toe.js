document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(function (square) {
        square.classList.add("square");
    });

    let gameState = Array(9).fill("");
    let xTurn = true;
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];

    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Returns "X" or "O"
            }
        }
        return null;
    }

    squares.forEach((square, index) => {
        
        square.addEventListener("mouseenter", () => {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });
        
        
        square.addEventListener("click", () => {
            if (gameActive && gameState[index] === "") {
                const currentPlayer = xTurn ? "X" : "O";

                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                gameState[index] = currentPlayer;

                let winner = checkWinner();
                if (winner) {
                    const statusDiv = document.getElementById("status");
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    gameActive = false; // Stop further moves for now
                } else {

                xTurn = !xTurn;
             }
        }
      });
    });
});
