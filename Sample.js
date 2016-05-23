var AlgorismSample = {
	findNumInMatrix: function (matrix, num) {
		var rows = matrix.length, cols = matrix[0].length;
		var y = rows - 1, x = 0, result = -1;

		if (matrix[x][y] === num) {
			return 0;
		}
		else if (matrix[x][y] > num) {
			y--;
		}
		else if (matrix[x][y] < num) {
			x++;
		}

		return -1;
	},
}


var matrix = [[1,2,3],[4,5,6],[7,8,9]], num =8;

AlgorismSample.findNumInMatrix(matrix, num);