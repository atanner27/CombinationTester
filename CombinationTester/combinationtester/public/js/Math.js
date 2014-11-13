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
	//Loop through the n elements
	origArray = arr;
	//Get options
	//then swap
	for(var i=0; i < arr.length; i ++)
	{
	Permutate(arr);
	arr = Swap(origArray, i);
	}





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









