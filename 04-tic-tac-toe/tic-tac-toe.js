// YOUR CODE BELOW

function generateBoard() {
    return [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}

let ticTacToe = {
    board: generateBoard(),
    move: function (character, row, column) {
        if (!this.board[row][column]){
            this.board[row][column] = character;
        }
        return this.board
    },
    clear: function () {
        this.board = generateBoard()
        return this.board
    }
};

