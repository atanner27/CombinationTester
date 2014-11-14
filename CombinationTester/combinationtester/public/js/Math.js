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
for(var i=0; i < permutations.length; i++)
{
	console.log("permutations i = " + permutations[i]);
	for(var totalMax = 1; totalMax < permutations.length + 1; totalMax++)
	{
		var sum = 0;
		var subPerm = perm.slice(0, totalMax);
		console.log("subPerm is:" + subPerm);
		for(val in subPerm)
		{
			console.log("curval is:" + val + "sum is:" + sum);
			sum += val;
		}
		console.log("total is:" + Total + " curnum is:" + sum);
		if(sum == Total)
		{
			//add
			console.log("found it" + subPerm);
		}
	}

}

// for(perm in permutations)
// {
// 	console.log("perm is:" + perm);
// 	for(totalMax = 1; totalMax < arr.length + 1; totalMax++)
// 	//for (totalMax in range(1, (arr.length) + 1))
// 	{
// 		var sum = 0;
// 		var subPerm = perm.slice(0, totalMax);
// 		console.log("subPerm is:" + subPerm);
// 		for(val in subPerm)
// 		{
// 			console.log("curval is:" + val + "sum is:" + sum);
// 			sum += val;
// 		}
// 		console.log("total is:" + Total + " curnum is:" + sum);
// 		if(sum == Total)
// 		{
// 			//add
// 			console.log("found it" + subPerm);
// 		}
// 	}
// }
// for perm in all_perms(numbers):
// 	for totalMax in range(1, (len(numbers) + 1)):
// 		sum = 0
// 		subPerm = perm[0: totalMax]
// 		for val in subPerm:
// 			sum += val

// 		if(sum == numA):
// 			print subPerm



//console.log("permutation math:" + doMath([5, 3, 7, 1]));

console.log("before return, combs is" + combs);
//Build the table response
var returnVar = "<tr>" +
            "<th>Combination #</th>" +
           
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


function Swap(arr, index)
{
temp = 0;
temp = arr[0];
arr[0] = arr[index];
arr[index] = temp;

return arr;
}
function Permutate(arr)
{
var curArray = [];
	sum = 0;
	for(var i = 0; i < arr.length; i ++)
	{
		curArray.push(arr[i]);
		sum += arr[i];
		console.log("cur sum is:" + sum);
		if(sum == Total)
		{
			combs.push(curArray);
			console.log("found one:" + curArray);
		}
	}


	return 
}

function Response()
{

}









