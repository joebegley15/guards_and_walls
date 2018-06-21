function bestEntryPoint(matrix) {
	var column;
	function howFarAway(matrix,column,row) {
	}
	for (var row = 0; row < matrix.length; row++) {
		column = 0;
		while (column < matrix[row].length) {
			if (matrix[column][row] === '_') {
				howFarAway(matrix,column,row);
			}
			column += matrix[row].length - 1;
		}
	}
}


var matrix = [
['_','_','_','G'],
['_','_','W','_'],
['_','G','W','_'],
['_','_','_','_']
]

bestEntryPoint(matrix);