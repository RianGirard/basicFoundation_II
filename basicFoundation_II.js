
// #1 Biggie Size: 
function makeItBig(arr1){
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            arr1[i] = "big";
        }
    }
    console.log(arr1);
    return arr1;
}
makeItBig([1, -1234,23, 23, -1, 23,-98]);

// #2 Print Low, Return High: 
function getValues2(arr2) {
    var max = arr2[0];
    var min = arr2[0];
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] > max){
            max = arr2[i];
        }
        if (arr2[i] < min){
            min = arr2[i];
        }
    }
    console.log(`The printed min value is: ${min}`);
    return max;
}
var returnMax = getValues2([-100, 300, -500, 75]);
console.log(`The returned value of max is: ${returnMax}`);

// #3 Print One, Return Another:
function getValues3(arr3) {
    for (var i = 0; i < arr3.length; i++) {
        if (i == (arr3.length - 2)){
            console.log(`The penultimate array value is: ${arr3[i]}`);
        }
    }
    var firstOdd = "none";
    for (var i = 0; i < arr3.length; i++) {
        if ((arr3[i] % 2 !== 0)){
            var firstOdd = arr3[i];
            return firstOdd;
        }
    }
    if (firstOdd == "none"){
        return firstOdd;
    }
}
var returnFirst = getValues3([-102, 301, 55, 75]);
console.log(`The first odd value in the array is: ${returnFirst}`);

// #4 Double Vision: 
function getValues4(arr4){
    var newArray4 = [];
    for (var i = 0; i < arr4.length; i++) {
        newArray4[i] = Math.pow(arr4[i], 2);
    }
    console.log(`The doubled array values are: ${newArray4}`);
    return newArray4;
}
getValues4([-11,-12,13,-1,8,1000]);

// #5 Count Positives -- vanilla skipped

// #6 Evens and Odds: 
function reviewArray5(arr5){
    var evenCount = 0; 
    var oddCount = 0;
    for (var i = 0; i < arr5.length; i++) {
        if (oddCount == 0 && arr5[i] % 2 !== 0){
            oddCount = 1
        }
        else if (oddCount == 1 && arr5[i] % 2 !== 0){
            oddCount = 2;
        }
        else if (oddCount == 2 && arr5[i] % 2 !== 0){
            oddCount = 3;
            console.log(`That's odd!`);
        }
        else {
            oddCount = 0;
        }        
        if (evenCount == 0 && arr5[i] % 2 == 0){
            evenCount = 1
        }
        else if (evenCount == 1 && arr5[i] % 2 == 0){
            evenCount = 2;
        }
        else if (evenCount == 2 && arr5[i] % 2 == 0){
            evenCount = 3;
            console.log(`Even more so!`);
        }
        else {
            evenCount = 0;
        }
    }
}
reviewArray5([2,5,10,14,5,7,11,6,8,10,51,78,99]);  

// #7 Increment the Seconds: 
function increment(arr6){
    for (var i=0; i<arr6.length; i++){
        if (i % 2 !== 0){
            arr6[i] = arr6[i] + 1;
        }
        console.log(arr6[i]);
    }
    return arr6;
}
console.log(increment([1,2,3,4,5,6,7,8,9,10]));

// #8 Previous Lengths: 
function previousLength(arr8){
    for (var i=arr8.length-1; i>=0; i--){
        if (i>0){
            arr8[i] = arr8[i-1].length;
        }
    }
    console.log(arr8);
}
previousLength(["hello", "dojo", "welcome", "now", "yowsah"]);

// #9 Add Seven -- vanilla skipped

// #10 Reverse Array 
function reverse(arr10){
    for (var i=0; i<arr10.length; i++){
        if (i < arr10.length/2){       // this "if" statement stops the loop from iterating once it goes 1/2 way through, otherwise it will reverse itself back again
            var x = arr10.length-1-i;
            var n = arr10[i];
            arr10[i] = arr10[x];
            arr10[x] = n;
        }
    }
    console.log(arr10);
}
reverse(["dojo",2,3,4,5,6,7,8]);

// #11 Outlook: Negative: too vanilla
// #12 Always Hungry: too vanilla
// #13 Swap Toward the Center: 
  // unfinished: given an array, swap the first and the last values and then the third and third to last values and then the fifth and fifth to last values, etc.
  /*
function reverse(arr10){
    for (var i=0; i<arr10.length; i++){
        if (i < arr10.length/2){       // this "if" statement stops the loop from iterating once it goes 1/2 way through, otherwise it will reverse itself back again
            var x = arr10.length-1-(2*i);
            var n = arr10[2*i];
            arr10[2*i] = arr10[x];
            arr10[x] = n;
        }
    }
    console.log(arr10);
}
reverse([1,2,3,4,5,6,7,8,11,12]);
*/