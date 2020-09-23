function MakeVector(row)
{
    row = []
    row[1] = 
}

function genDay() 
{
	//first generate a month
	var month = 1 + Math.round(11 * Math.random());
    // accounting for the differences in dates
    if (((month % 2 == 1) && (month <= 7)) || ((month % 2 == 0) && (month >= 8))) 
    {
		var day = 1 + Math.round(30 * Math.random());
    } 
    else if (month == 2) // for february
    {
		var day = 1 + Math.round(27 * Math.random());
    } 
    else  // for every other even month
    { 
		var day = 1 + Math.round(29 * Math.random());
	}
	return [day, month];
}

// -------------------------------------------------------------------

function genBirthdays(n)
{ // generate a column of player numbers from 0 to n, with the respective birthday array
	var birthdays = [];
	var nst = n.toString(); // so now for example 1500 to string is 1500
    for (var i = 0; i < n; i++)
    { // var str is basically 0 becomes 0
		var str = i.toString();
		var lim = nst.length - str.length; // and now lim is 4 - 1 = 3
        for (var j = 1; j <= lim; j++)  // so now this generates 0000
        {
			str = "0" + str;
		}
		birthdays[2 * i] = str; // the earlier value is the number
		birthdays[1 + (2 * i)] = genDay(); // the value behind is the day
	}
	return birthdays;
}

// -------------------------------------------------------------------

// search for unique birthdays in the array
function find(birthdays)
{
    // create a new list for the unique dates
    var uniqueBirthdays = [];
    // now start comparing and searching for unique birthdays
    for (var i = 1; i < birthdays.length; i = i+2)
    {
        var count = 0;
        // first date compare with every single date
        for (var j = 1; j < birthdays.length; j = j+2)
        {
            if (birthdays[i].toString() == birthdays[j].toString())
            {
                count++;
                if (count > 1) // save time and processing
                {
                    break;
                }
            }

        }
        // if there is only 1 count, it must mean that value of i unique
        if (count == 1)
        {
            uniqueBirthdays.push(birthdays[i-1].toString());
        }
    }
    return uniqueBirthdays;
}

// -------------------------------------------------------------------

function swap(array, index1, index2) 
{
	var x1 = array[index2];
	var x2 = array[index2 - 1];
	array[index2] = array[index1];
	array[index1] = x1;
	array[index2 - 1] = array[index1 - 1];
	array[index1 - 1] = x2;
	return array; // arrays have been swapped
}

// -------------------------------------------------------------------

function bubbleSort(array) 
{
	var n = array.length;
    for (var i = 0; i <= n - 2; i++) 
    { // standard bubble sort except for an amendment
		var count = 0;
        for (var j = 1; j <= n - 3; j = j + 2) 
        { // sorting according to the month
            if (array[j + 2][1] < array[j][1]) 
            { // compare birthdays and thus + 2 for loops
				swap(array, j, j + 2);
				count++;
			}
		}
        if (count == 0) 
        {
			break;
		}
	}
	return array;
}

// -------------------------------------------------------------------

function bubbleSortDays(array) 
{
	var n = array.length;
    for (var i = 0; i <= n - 2; i++) 
    {
		var count = 0;
        for (var j = 1; j <= n - 3; j = j + 2) 
        {
            if ((array[j + 2][1] == array[j][1]) && (array[j + 2][0] < array[j][0])) 
            { // the 2 birthday months must be of the same month so that can compare the next one
				swap(array, j, j + 2);
				count++;
			}
		}
        if (count == 0) 
        {
			break;
		}
	}
	return array;
}

// -------------------------------------------------------------------

// sort then search for unique birthdays
function findSorted(birthdays)
{
    bubbleSort(birthdays);
    bubbleSortDays(birthdays);
    // create a new list for the unique dates
    var uniqueBirthdays = [];
    // now start comparing and searching for unique birthdays
    for (var i = 1; i < birthdays.length; i = i+2)
    {
        var count = 0;
        // first date compare with every single date
        for (var j = 1; j < birthdays.length; j = j+2)
        {
            if (birthdays[i].toString() == birthdays[j].toString())
            {
                count++;
                // now that it is sorted can save time
                if (count > 1)
                {
                    break;
                }
            }
        }
        // if there is only 1 count, it must mean that value of i unique
        if (count == 1)
        {
            uniqueBirthdays.push(birthdays[i-1].toString());
        }
    }
    return uniqueBirthdays;
}



var birthdays = genBirthdays(1589);
console.log(find(birthdays));
console.log(findSorted(birthdays));