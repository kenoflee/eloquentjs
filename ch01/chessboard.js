const getRow = (first, second, size) => {
    let row = "";
    for(let i = 1; i <= size; i++) {
        if(i % 2 === 1) {
            row += first;
        } else if(i % 2 === 0) {
            row += second;
        }
    }
    return row;
}

const chessboard = (first, second, size) => {
    let output = "";
    for(let i = 1; i <= size; i++) {
        if(i % 2 === 1) {
            output += getRow(first, second, size) + '\n';
        } else if(i % 2 === 0) {
            output += getRow(second, first, size) + '\n';
        }
    }
    console.log(output);
}

chessboard(' ', '#', 8);