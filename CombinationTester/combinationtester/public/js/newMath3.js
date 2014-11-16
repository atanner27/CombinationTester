
function Calc() {
    //testing'
    //var elem = document.createElement("img");
    //elem.id = "testing";
    //elem.style.width = "75px";
    //document.getElementById("spinDiv").appendChild(elem);
    var load = document.getElementById("loader1000").style.display = "inline";
    //load.style.display = "inline";
    console.log("should be visible now");
    //elem.src = '../img/loader.gif';
    var foo = document.getElementById("Total").value;
    var num = document.getElementById("Numbers").value;

    var totalOperations = 0;

    var Total = parseFloat(foo);
    var combs = [];
    //testing
    //result = string.split(/\t/)
    var res = num.split(/\t/);
    //date.split(/[.,\/ -]/)
    var tabs = num.split(/[\t]+/);
    var commas = num.split(",");
    //split(" +");
    var spaces = num.split(" ");
    console.log("tabs are:" + tabs);
    console.log("commas" + commas);
    console.log("spaces" + spaces);

    if (commas.length > 1) {
        res = commas;
    } else if (tabs.length > 1) {
        res = tabs;
    } else if (spaces.length > 1) {
        res = spaces;
    } else {
        res = commas;
    }

    //var res = num.split(",");
    //alert('res is'  + res);
    var arr = [];
    for (var i = 0; i <= res.length - 1; i++) {
    	var floatRep = parseFloat(res[i]);
    	if(floatRep <= Total)
    	{
    		arr.push(floatRep);
        	totalOperations++;
    	}
    }

    function recursion(arr, n)
    {

        if(n == 0)
        {
            console.log("breaking:" + arr[n]);
            return arr[n];
        }
        recursion(arr, n-1);
    }


    arr = arr.sort();
    var result = recursion(arr, arr.length);
    console.log(result);
    var finalArr = [];
    var curSum = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log("array[i]:" + arr[i]);
        var curArray = [];
        //for (var j= Things.length - 1; i >= 0; i--) {
        curSum = arr[i];
        curArray.push(arr[i]);
        console.log("after adding i, curset is:" + curArray);
        if (curSum == Total) {
            finalArr.push(curArray);
        }
        //for (var j = arr.length - i; j >= 0; j--) {
        for(var j = i + 1; j < arr.length; j ++){
            curSum += arr[j];
            curArray.push(arr[j]);
            console.log("after adding J, curset is:" + curArray);
            if (curSum == Total) {
                finalArr.push(curArray);
            }
            console.log("array[j]:" + arr[j]);
            for(var k = j ; k < arr.length ; k ++)
            {
                console.log("array[k]:" + arr[k]);
            }
        }
    }
    console.log("finalarray:" + finalArr);
    for (var i = 0; i < finalArr.length ; i++)
    {
        console.log("cur set:" + finalArr[i]);
    }
    var returnVar = buildReturn(finalArr, totalOperations);
    document.getElementById("ResultsTable").innerHTML = returnVar;
    //remove loading
    var Node = document.getElementById("loader1000");
    Node.style.display = "none";
    console.log("should be hidden now ");
}

//Handles doing the permutations and slicing recursively
function doMath(input, totalOperations) {
    var permArr = [],
        usedChars = [];

    function permute(input, totalOperations) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
        	totalOperations++;
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
            	//if(!isDuplicate(permArr, usedChars.slice().sort(), totalOperations))
            	//{
            		//console.log("adding to set");
                	permArr.push(usedChars.slice());
            	//}
            }
            permute(input, totalOperations);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    };
    return permute(input);
}


//return true if it is a duplicate
function isDuplicate(combs, newSet, totalOperations) {
    //if it is empty, return false
    if (combs.length == 0) {
        return false;
    }
    //loop through array of sets
    for (var i = 0; i < combs.length; i++) {
    	totalOperations++;
        totalMatching = 0;
        //loop through each set and compare
        for (var j = 0; j < combs[i].length; j++) {
        	totalOperations++;
            //if the numbers are the same, increment the counter
            if (combs[i][j] == newSet[j]) {
                totalMatching++;
            }
        }
        //if the number correct are the same as the total number, the sets are the same
        if (totalMatching == combs[i].length) {
            return true;
        }
    }
    return false;

}

//Take in the array of finished sets. build response
function buildReturn(combs, totalOperations) {
    //Build the table response
    var returnVar = "<tr>" +
        "<th>#</th>" + "<th>Combinations</th>" +

        "</tr>";
    for (var i = 0; i < combs.length; i++) {
    	totalOperations++;
        returnVar += "<tr>";
        returnVar += "<td>";
        returnVar += i;
        returnVar += "</td>";
        returnVar += "<td>";
        returnVar += combs[i];
        returnVar += "</td>";
        returnVar += "</tr>";

    }
    return returnVar;
}