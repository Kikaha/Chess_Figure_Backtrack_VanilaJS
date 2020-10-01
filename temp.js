let solve = function (n) {
    const result = [];
    const board = Array(n).fill(0).map(_ => Array(n).fill('.'));

    const colsUsed = Array(n).fill(false);
    let diagonalRightUsed = Array(n*2-1).fill(false);
    let diagonalLeftUsed = Array(n*2 -1 ).fill(false);

    const put = (i, j) => {
        const indexOfRightDiag = i+n-j-1;
        const indexOfLeft = i+j;
        if (colsUsed[j] || diagonalRightUsed[indexOfRightDiag] || diagonalLeftUsed[indexOfLeft]) {
            return;
        }
        // if possible put element
        board[i][j] = '*';
        colsUsed[j] = true;
        diagonalLeftUsed[indexOfLeft] = true;
        diagonalRightUsed[indexOfRightDiag] = true;

        // last element is put
        if (i === n - 1) {
            result.push(board.map(row => row.join('')));
        } else {
            for (let k = 0; k < n; k++) {
                put(i + 1, k)
            }
        }
        board[i][j] = '.';
        colsUsed[j] = true;
        diagonalLeftUsed[indexOfLeft] = true;
        diagonalRightUsed[indexOfRightDiag] = true;
    }

    for (let k = 0; k < n; k++) {
        put(0,k);  
    }
    return result;
}

console.log(solve(5));