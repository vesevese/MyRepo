var AlgorismSample = {
	findNumInMatrix: function (matrix, num) {
		var rows = matrix.length, cols = matrix[0].length;
		var y = rows - 1, x = 0, result = -1;

		while (x < cols && y >= 0) {
			if (matrix[x][y] === num) {
				return 0;
			}
			else if (matrix[x][y] > num) {
				y--;
			}
			else if (matrix[x][y] < num) {
				x++;
			}	
		}

		return -1;
	},

	replaceSpaceWithMarks: function (inputString) {
		var array = inputString.split("");
		var numOfSpace = 0;
		var indexOfNew, indexOfOriginal = 0, lengthOfArray = array.length;

		for (; indexOfOriginal < lengthOfArray; indexOfOriginal++) {
			if (array[indexOfOriginal] === ' ') {
				numOfSpace++;
			}
		}

		indexOfNew = numOfSpace * 2 + lengthOfArray;
		indexOfOriginal--

		for (; indexOfOriginal >= 0; indexOfOriginal--) {
			if (array[indexOfOriginal] === ' ') {
				array[--indexOfNew] = "0";
				array[--indexOfNew] = "2";
				array[--indexOfNew] = "%";
			}
			else {
				array[--indexOfNew] = array[indexOfOriginal];
			}
		}

		return array.join("");
	}
}


var matrix = [[1,2,3],[4,5,6],[7,8,9]], num =8;
AlgorismSample.findNumInMatrix(matrix, num);

var inputString = "We are the winers";
AlgorismSample.replaceSpaceWithMarks(inputString);