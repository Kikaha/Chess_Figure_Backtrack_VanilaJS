 export function solve() {
     let result = [];
    const n = 8;
    const board = Array(n).fill(0).map(_ => Array(n).fill('.'));
    const colUsed = Array(n).fill(false);
    const diagonalLeftUsed = Array(n * 2 - 1).fill(false);
    const diagonalRightUsed = Array(n * 2 - 1).fill(false);

    const put = (i, j) => {
   
        const indexLeftDiag = i - j + n - 1;
        const indexRightDiag = i + j;

        if(colUsed[j] || diagonalLeftUsed[indexLeftDiag] || diagonalRightUsed[indexRightDiag]){
            return;
        }

        board[i][j] = '*';
        colUsed[j] = true;
        diagonalLeftUsed[indexLeftDiag] = true;
        diagonalRightUsed[indexRightDiag] = true;

        if(i === n-1){
           result.push(board.map(x=>x.join(' '))); //flat
           return;
        }else{
            for (let k = 0; k < n; k++) {
                put(i+1,k)
            }
        }

        board[i][j] = '.';
        colUsed[j] = false;
        diagonalLeftUsed[indexLeftDiag] = false;
        diagonalRightUsed[indexRightDiag] = false;
    }
    put(0,0);

    return result;

}




