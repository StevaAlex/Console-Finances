var finances = [
['Jan-2010', 867884], // position [0][1]-the first squar bracket is the index number of the array ['Jan-2010', 867884]
['Feb-2010', 984655], //the 2nd square bracket is the index number of the array within that array 
['Mar-2010', 322013], // so [0][1] is the position of 867884 and [0][0] is the position of Jan-2010 
['Apr-2010', -69417], // to get the 2nd array in the data set, its index number is 1, so to access the number in the 2nd array,
['May-2010', 310503], // its position is [1][1], think of it as [i][j]
['Jun-2010', 522857],// so all the array numbers, nested insidse the array will have their [j]=[1]
['Jul-2010', 1033096],// all that changes is the [i]
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
]; 

//total number of months in data set 
console.log("Total months: " + finances.length + " months");

// net total: Sum of all [j] in nested arrays 
// create a loop that runs from the first [j] within the array for var i=0; i less than # of months, i++, 
// have a variable for total that calculates the sum of the profits  
//var total; 
//within the for loop: total += finances([i][1]) 

var total = 0; 
for (var i = 0; i < finances.length; i++) { 
    total += finances[i][1]; //the symbol += works out the cumulative total, it adds the value on the right to the var total
}                           // then it stores it inside the var total
console.log("Net total: $" + total); // so first total=0, then inside the for loop finances[i][1], will be finances[0][1]
//this is because i is first set to zero. So finances[0][1]= 867884. As we are now doing total += finances[0][1], 
//total will now add the value on the right and becomes the cumalative total of the original total number + the value on the right
// so total will be 0 + 867884 
// after this loop, i is iterated by 1, so i is now 1. so finances[i][0] is now finances[1][1] as i is now zero 
// so this selects the number in the 2nd array. 
//now that total is now total += finances[1][1], it will be the cumulative total of the number stored in total (867884) + the number in the 2nd array. 
//This carries on until we get to the final index number in the list of arrays

//average change 
//work out the different between two months, then add then up 
 //[1][1]-[0][1]=
 //[2][1]-[1][1]= and so forth
 //maybe var diff= 0; 
 // within the for loop:if 1=0 diff+= finances[i +1][1]-finances[i][1] 
 // after 1st iteration: i=1, so diff+= finances[1+1][1]-finances[1][1] 
 var diff = 867884; /// make the value of diff the value for January
for (var i = 0; i < finances.length - 1; i++) { 
    diff += finances[i+1][1] -  finances[i][1]; 
} 
var averChange = diff / finances.length; 
console.log("Average change: $" + averChange.toFixed(2)); //.toFixed(2) rounds to 2 decimal places
//method works!! Only if you set your starting value to the value for January
//you also need to make the last index to be 85 as there is no index after 85


//work out greatest profits and greatest loss 

//Greatest profit  


var greatestIncrease = 0;
var index = 0;
for (var i = 0; i < finances.length - 1; i++) { 
     diff = finances[i+1][1] -  finances[i][1];
    if ( diff > greatestIncrease ) { 
        greatestIncrease = finances[i+1][1];
        index = i+1;
    }
} 
console.log(finances[index]);  

//Greatest decrease 
var greatestDecrease = 0; 
var index = 0;
for (var i = 0; i < finances.length - 1; i++) { 
     diff = finances[i+1][1] -  finances[i][1]; // after first loop diff= +ve which is not less that zero, so code in if 
    if ( diff < greatestDecrease ) {            //is not executed 
        greatestDecrease = finances[i+1][1];    //when diff = -ve then code in if is executed, and when the whole for loop
        index = i+1;                            // has been run through ie the whole array has been compared, the index number which
    }                                           //is stored as the greatest decrease is the one with the more negative number
}                                               //or the greatest decreases
console.log(finances[index]); 