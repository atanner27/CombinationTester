
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


    //get Permutations
    var permutations = doMath(arr, totalOperations);
    console.log("total perms:" + permutations.length);
    //Go through all of the permutaions
    for (var i = 0; i < permutations.length; i++) {
        //start from the beginning of the array
        totalOperations++;
        for (var totalMax = 1; totalMax < arr.length + 1; totalMax++) {
        	totalOperations++;
            var sum = 0;
            //Grab the current section of numbers
            var subPerm = permutations[i].slice(0, totalMax);

            //add the current section together
            for (var j = 0; j < subPerm.length; j++)
            //for(val of subPerm)
            {
            	totalOperations++;
                //see if the totals match, gets around decimal problems
                sum = (sum * 100 + subPerm[j] * 100) / 100;
                //if you have already exceeded the total, break out
                if(sum > Total)
                {
                	//console.log("Breaking loop");
                	j = subPerm.length;
                }
            }
            if (sum == Total) {
                //sort to make duplicate check easier
                var sorted = subPerm.sort();
                //Need to check if it exists in the solutions already	
                if (!isDuplicate(combs, sorted, totalOperations)) {
                    //new item, add to result
                    combs.push(sorted);
                }

            }
        }
    }

    //log total operations
    console.log("total operations: " + totalOperations);
    //build response and add it to page
    var returnVar = buildReturn(combs, totalOperations);
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