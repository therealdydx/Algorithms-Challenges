function genRandomArray(n)
{
	var arr = [];
	for (var i = 0; i < n; i++)
	{
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

function swap(array, index1, index2)
{
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}

function bubbleSort(array)
{
	var n = array.length;
	for (var i = 0; i <= n - 2; i++)
	{
		var count = 0;
		for (var j = 0; j <= n - 2; j++)
		{
			if (array[j+1] < array[j])
			{ // then bubble the bigger element to the right
				swap(array, j, j + 1);
				count++;
			}
		}
		if (count == 0)
		{ // means no swaps
			break;
		}
	}
	return array;
}

var array = genRandomArray(8);
console.log(array);
console.log(bubbleSort(array));