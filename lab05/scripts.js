
/* Checking - 2 value is equal or not  */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED. Expected " + expected + " found " + found;
  }
}

/* Checking - 2 array's relative numbers are equal or not*/
function myFunctionTestForArray(expected, found) {
    var counter = 0;
	for (i = 0; i < expected.length; i++) {
		if (expected[i] !== found [i]) {
			counter ++;
		}
	}
	if (counter === 0) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED. Expected " + expected + " found " + found;
	}
}

/* 2. Max values of 2 numbers */
function maxOfTwo(one, two){
	if (one > two) {
		return one;
	} else {
		return two
	}
}

/* 3. Max values of 3 numbers */
function maxOfThree (one, two, three) {
	if (one > maxOfTwo (two, three)) {
		return one;
	}else {
		return maxOfTwo (two, three);
	}
}

/* 4. Checking a character is a vowel or not */
function isVowel(inputChar){
	var vowels = "aeiou";
	if (inputChar.length == 1) {
		if (vowels.indexOf(inputChar) >= 0){
			return true;
		}else {
			return false;
		}
	}else {
		return false;
	}
}

/* 5. sum() and multiply() */
function sum(myArray){
	var sumValue = 0;
	for (i = 0; i < myArray.length; i++ ){
		sumValue = sumValue + myArray[i];
	}
	return sumValue;
}

function multiply(myArray){
	var multValue = 1;
	for (i = 0; i < myArray.length; i++){
		multValue = multValue * myArray[i];
	}
	return multValue;
}

/* 6. reverse() */
function reverse(inputString){
	return inputString.split("").reverse().join("");
}

/* 7. findLongestWord() */
function findLongestWord(myWordsArray){
	var longWord = myWordsArray[0];
	for (i = 0; i < myWordsArray.length; i++){
		if (longWord.length < myWordsArray[i].length){
			longWord = myWordsArray[i];
		}
	}
	return longWord.length;
}

/* 8. filterLongWords() */

function filterLongWords (myWordsArray, i){
	return myWordsArray.filter (function (element) {
		return element.length > i;
	})
}

/* 9.1 multiply each element by 10 */ 
function multiplyBy10 (myArray){
	const returnArray = myArray.map(function(element , i, array){
		return element * 10;
	})
	return returnArray;
}

/* 9.2 return array with all elements equal to 3 */ 
function arrayEqual3 (myArray){
	const returnArray = myArray.filter(function (element){
		return element === 3;
	})
	return returnArray;
}

/* 9.3 return the product of all elements */ 
function productOfAllElements (myArray){
	const returnArray = myArray.reduce(function (preValue, element, index, array){
		return preValue * element;
	})
	return returnArray;
}


/* Test - console.log() */

console.log ("* 2. Max values of 2 numbers * ");
console.log ("Expected output of maxOfTwo (10,20) is 20 " + myFunctionTest (20, maxOfTwo(10,20)));

console.log ("\n\n* 3. Max values of 3 numbers * ");
console.log ("Expected output of maxOfThree (10,20,30) is 30 " + myFunctionTest (30, maxOfThree(10,20,30)));

console.log ("\n\n* 4. Checking a character is a vowel or not * ");
console.log ("Expected output of if input is vowel ( a ) is true " + myFunctionTest (true, isVowel('a') ));
console.log ("Expected output of if input is vowel ( b ) is false " + myFunctionTest (true, isVowel('b') ));

console.log ("\n\n* 5. sum and multiply * ");
console.log ("Expected output of sum ([10,20,30]) is 60 " + myFunctionTest (60, sum([10,20,30])));
console.log ("Expected output of multiply ([1,2,3,4]) is 24 " + myFunctionTest (24, multiply([1,2,3,4])));

console.log ("\n\n* 6. reverse * ");
console.log ("Expected output of reverse ('jag testar') is 'ratset gaj' " + myFunctionTest ("ratset gaj", reverse("jag testar")));

console.log ("\n\n* 7. findLongestWord * ");
console.log ("Expected output of longest word (['this','is','JavaScript','yes']) is 10 " + myFunctionTest (10, findLongestWord(["this","is","JavaScript","yes"])));

console.log ("\n\n* 8. filterLongWords * ");
console.log ("Expected output of words (['this','is','JavaScript','yes'], 3) is this,JavaScript " + myFunctionTestForArray (["this","JavaScript"], filterLongWords(["this","is","JavaScript","yes"], 3)));

console.log ("\n\n* 9.1 multiply each element by 10 * ");
console.log ("Expected output of array ([1,3,5,3,3]) is [10,30,50,30,30] " + myFunctionTestForArray ([10,30,50,30,30], multiplyBy10([1,3,5,3,3])));
console.log ("* 9.2 return array with all elements equal to 3 * ");
console.log ("Expected output of array ([1,3,5,3,3]) is [3,3,3] " + myFunctionTestForArray ([3,3,3], arrayEqual3([1,3,5,3,3])));
console.log ("* 9.3 return the product of all elements * ");
console.log ("Expected output of array ([1,3,5,3,3]) is 135 " + myFunctionTest (135, productOfAllElements([1,3,5,3,3])));

/* Test - console.assert() */

//2. Max values of 2 numbers
function testMaxOfTwo() {
    console.assert(maxOfTwo(10,20) === 20, "Output should be 20");
}
testMaxOfTwo();

//3. Max values of 3 numbers
function testMaxOfThree(){
	console.assert(maxOfThree(10,20,30) === 30 , "Output should be 30")	;
}
testMaxOfThree();

//4. Checking a character is a vowel or not
function testIfVowel(){
	console.assert(isVowel('a') === true, "Output should be true");
}
testIfVowel();

//5. sum
function testSumValue(){
	console.assert(sum([10,20,30]) === 60, "Output should be 60");
}
testSumValue();

//5. multiply
function testMultiplyValue(){
	console.assert(multiply([1,2,3,4]) === 24, "Output should be 24");
}
testMultiplyValue();

//6. reverse
function testReverseValue(){
	console.assert(reverse("jag testar") === "ratset gaj", "Output should be 'ratset gaj'");
}
testReverseValue();

//7. findLongestWord
function testLongestWord(){
	console.assert(findLongestWord(["this","is","JavaScript","yes"]) === 10, "Output should be 10");
}
testLongestWord();

//8. filterLongWords
function testArrayWordsValues(){
	console.assert(myFunctionTestForArray (["this","JavaScript"], filterLongWords(["this","is","JavaScript","yes"], 3)) === "TEST SUCCEEDED", "Output should be ['this,JavaScript']");
}
testArrayWordsValues();

//9.1 multiply each element by 10
function testMultiplyBy10(){
	console.assert(myFunctionTestForArray ([10,30,50,30,30], multiplyBy10([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be [10,30,50,30,30]");
}
testMultiplyBy10();

//9.2 return array with all elements equal to 3
function testEqualWith3(){
	console.assert(myFunctionTestForArray ([3,3,3], arrayEqual3([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be [3,3,3]");
}
testEqualWith3();

//9.3 return the product of all elements
function testProductsOfAllElements(){
	console.assert(myFunctionTest (135, productOfAllElements([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be 135");
}
testProductsOfAllElements();

