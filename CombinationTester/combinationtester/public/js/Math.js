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


//permute();
var permutations = doMath(arr);
console.log("permutations" + permutations);
//Go through all of the permutaions
for(var i=0; i < permutations.length; i++)
{
	//console.log("permutations i = " + permutations[i]);
	//start from the beginning of the array
	for(var totalMax = 1; totalMax < arr.length + 1; totalMax++)
	{
		var sum = 0;
		//Grab the current section of numbers
		var subPerm = permutations[i].slice(0, totalMax);
		//console.log("subPerm is:" + subPerm);
		//subPerm.foreach()
		//add the current section together
		for(var j = 0; j < subPerm.length; j++)
		//for(val of subPerm)
		{
			//console.log("curval is:" + val + "sum is:" + sum);
			//see if the totals match, get around decimal problems
			sum = (sum * 100 + subPerm[j] * 100) / 100; 
		}
		//console.log("total is:" + Total + " curnum is:" + sum);
		if(sum == Total)
		{
			//add
			//console.log("found it" + subPerm);
			//console.log("sorted is:" + subPerm.sort);
			//console.log(combs.indexOf(subPerm.sort));
			var testing = subPerm.sort();
			console.log("combs is" + combs);
			console.log("val is" + testing);
			console.log("index is" + combs.indexOf(testing));	
			//Need to check if it exists in the solutions already	
			if(!isDuplicate(combs, testing))
			{
				console.log("not there");
				combs.push(testing);
			}	
			// if(combs.indexOf(testing) == -1)
			// {
			// combs.push(testing);
			// console.log("adding:" + testing);
			// }
		}
	}

}

console.log("before return, combs is" + combs);
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


document.getElementById("ResultsTable").innerHTML =  returnVar;

}


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
//console.log("permutation:" + permute(input));
return permute(input);
}


//return true if it is a duplicate
function isDuplicate(combs, newSet)
{
	//loop through the sets
	console.log("curSet is:" + combs);
	console.log("curSet after sort" + combs.length);
	//if it is empty, return false
	if(combs.length == 0 )
	{
		return false;
	}
	for(var i= 0; i < combs.length; i ++)
	{
		console.log("comb i" + combs[i]);
		totalMatching = 0;
		for(var j = 0; j < combs[i].length; j++)
		{
		console.log("comp, combs i {J} is :" + combs[i][j]);
		console.log("newSet J  is:" + newSet[j]);

		if(combs[i][j] == newSet[j])
		{
			totalMatching++;
		}

		//this does not work because it will fail if ther first set is different
		//loop through the elements
		//checking against each other
		// console.log("comb i" + combs[i]);
		// for(var j = 0; j < combs[i].length; j++)
		// {
		// console.log("comp, combs i {J} is :" + combs[i][j]);
		// console.log("newSet J  is:" + newSet[j]);
		// if(combs[i][j] != newSet[j])
		// {
		// 	return false;
		// }

		}
		console.log("combs i length is" + combs[i].length);
		console.log("totalMatching is" + totalMatching);
		if(totalMatching == combs[i].length)
		{
			return true;
		}
	}
	return false;

}










