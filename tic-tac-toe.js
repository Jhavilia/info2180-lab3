document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(function (square) {
        square.classList.add("square");
    });

    let gameState = Array(9).fill("");
    let xTurn = true;

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (gameState[index] === "") {
                const currentPlayer = xTurn ? "X" : "O";

                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                gameState[index] = currentPlayer;
                xTurn = !xTurn;
        }
      });
    });
});
