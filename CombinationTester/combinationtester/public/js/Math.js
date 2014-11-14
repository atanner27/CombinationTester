function Calc()
{
	var foo = document.getElementById("Total").value;
	var num = document.getElementById("Numbers").value;
	var Total = parseFloat(foo);
	var combs = [];
	
	var res = num.split(",");
	//alert('res is'  + res);
	var arr = [];
	for(var i=0; i<=res.length - 1; i++) {
   	arr.push(parseFloat(res[i]));
	}


//get Permutations
var permutations = doMath(arr);
//Go through all of the permutaions
for(var i=0; i < permutations.length; i++)
{
	//start from the beginning of the array
	for(var totalMax = 1; totalMax < arr.length + 1; totalMax++)
	{
		var sum = 0;
		//Grab the current section of numbers
		var subPerm = permutations[i].slice(0, totalMax);
		
		//add the current section together
		for(var j = 0; j < subPerm.length; j++)
		//for(val of subPerm)
		{
			//see if the totals match, gets around decimal problems
			sum = (sum * 100 + subPerm[j] * 100) / 100; 
		}
		if(sum == Total)
		{
			//sort to make duplicate check easier
			var sorted = subPerm.sort();	
			//Need to check if it exists in the solutions already	
			if(!isDuplicate(combs, sorted))
			{
				//new item, add to result
				combs.push(sorted);
			}	
			
		}
	}

}

//build response and add it to page
var returnVar = buildReturn(combs);
document.getElementById("ResultsTable").innerHTML =  returnVar;
}

//Handles doing the permutations and slicing recursively
function doMath(input)
{
	var permArr = [],
usedChars = [];
function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};
return permute(input);
}


//return true if it is a duplicate
function isDuplicate(combs, newSet)
{
	//if it is empty, return false
	if(combs.length == 0 )
	{
		return false;
	}
	//loop through array of sets
	for(var i= 0; i < combs.length; i ++)
	{
		totalMatching = 0;
		//loop through each set and compare
		for(var j = 0; j < combs[i].length; j++)
		{
		//if the numbers are the same, increment the counter
		if(combs[i][j] == newSet[j])
		{
			totalMatching++;
		}
		}
		//if the number correct are the same as the total number, the sets are the same
		if(totalMatching == combs[i].length)
		{
			return true;
		}
	}
	return false;

}

//Take in the array of finished sets. build response
function buildReturn(combs)
{
//Build the table response
var returnVar = "<tr>" +
            "<th>Combinations</th>" +
           
            "</tr>";
for(var i =0; i < combs.length; i++)
{
	returnVar += "<tr>";
	console.log("llop combs is:" + combs[i]);
	returnVar += "<td>";
	returnVar += combs[i]; 
	returnVar+= "</td>";
	returnVar+= "</tr>";

}
return returnVar;
}