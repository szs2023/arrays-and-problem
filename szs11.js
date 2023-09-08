// sheet1
// proplem 1
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   console.log(reverseString("Hello World")); 
// ==========================================================================================
// proplem 2
// function test(name1,name2){
//     return name1.toLowerCase() == name2.toLowerCase();
// }
// console.log(test("Eraa", "eraa"));
// console.log(test("Mohamed", "Moamen"));
// ===============================================================================================
// proplem 3
// function check(letter){
// return letter== letter.toUpperCase();
// }
// console.log(check("HELLO"));
// console.log(check("HeLLO"));
// =====================================================================================================
// proplem 4
// function test(str,start,end){
//     return str.slice(start,end)
// }
// console.log(test("Moamen",1,4));
// ===========================================================================================================
// proplem 5
// function family(firstname,midlename,lastname){
//    result=firstname.concat(midlename,lastname)
//    return result
// }
// console.log(family("saed","zakarya","el sokarry"));
// ===========================================================================================================
// proplem 6
// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);
//               =====&another solution&========

// // program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // convert string to an array
//     const arrayValues = string.split('');

//     // reverse the array values
//     const reverseArrayValues = arrayValues.reverse();

//     // convert array to string
//     const reverseString = reverseArrayValues.join('');

//     if(string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// //take input
// const string = prompt('Enter a string: ');

// checkPalindrome(string);                   


// ==========================================================================================================

// proplem 7
// function remove(name1){
//     return name1.trim()
// }
// console.log(remove(         "saed,zakarya     "));
// =========================================================================================================
// proplem 8
// function checkurl(url){
//     if(url.startsWith("ww.") && url.endsWith(".eraa")){
//         return true
//     }
//     else{
//         return false
//     }
   
    
// }
// console.log(checkurl("ww.moamen.eraa"));
// console.log(checkurl("w3w.sherif.err"));
// ========================================================================================================
// proplem 9
// function removeo(letter1 ,letter2){
// return letter1.replace(/o/gi,"")
// }
// console.log(removeo("Eraoa"));
// console.log(removeo("oMOamen"));
// ===========================================================================================================
// proplem 10
// function isInterleaved(A, B, C) {
// 	// Base Case: If all strings are empty
// 	if (!A && !B && !C) {
// 		return true;
// 	}

// 	// If C is empty and any of the two strings is not empty
// 	if (!C) {
// 		return false;
// 	}

// 	// If the first character of C matches the first character of A,
// 	// then recursively check the rest of A and C
// 	if (A && C[0] == A[0]) {
// 		return isInterleaved(A.substring(1), B, C.substring(1));
// 	}

// 	// If the first character of C matches the first character of B,
// 	// then recursively check the rest of B and C
// 	if (B && C[0] == B[0]) {
// 		return isInterleaved(A, B.substring(1), C.substring(1));
// 	}

// 	// If none of the above conditions are met, then C cannot be interleaved
// 	// from A and B
// 	return false;
// }

// // A function to run test cases
// function test(A, B, C) {
// 	if (isInterleaved(A, B, C)) {
// 		console.log(`${C} is interleaved of ${A} and ${B}`);
// 	} else {
// 		console.log(`${C} is not interleaved of ${A} and ${B}`);
// 	}
// }

// // Driver Code
// test("XXY", "XXZ", "XXZXXXY");
// test("XY", "WZ", "WZXY");
// test("XY", "X", "XXY");
// test("YX", "X", "XXY");
// test("XXY", "XXZ", "XXXXZY");

// =======================================================================================================================================================================





// / Sheet of Array

// problem 1
// function left(num){
// console.log(String(num)[0]);
// }
// left(432)
// *************************************************************************************************
// problem 2
// let arr=[5,7,-2,0,4,-8,-3,6]
// for (let i=0 ; i<arr.length ;i++){
//     arr[i]>0 ?console.log("positive :",arr[i]):console.log("negative",arr[i])
//     arr[i]%2==0 ?console.log("even :", arr[i]):console.log("odd",arr[i])
    
// }
// ******************************************************************************************************

// // problem 3...
// function array(arr) {
// for(let i=0 ; i<arr.length ;i++){
//     if (arr.includes(String)){
//         console.log("this array has string")
//         }
// }
// }
// array([1 , Nan ,'a' ,'aba'])
// ********************************************************************************************************
// // problem 4
// function slice(arr){
// console.log(arr.slice(1,3))
// }
// slice(['sayed ','ahmed', 'adham', 'mahmoud' ,'hossam','mohamed'])
// *********************************************************************************************************
// problem5
// function arrays (arr1,arr2,arr3){
// const max1=Math.max(...arr1)
// const max2=Math.max(...arr2)
// const max3=Math.max(...arr3)

// console.log(Math.max(...arr1) ,Math.max(...arr2) ,Math.max(...arr3))

// }
// arrays ([1,2,3,4], [45 ,73,12], [13 ,13 ,10])
// ************************************************************************************************************
// // problem 6
// let string=prompt("Enter the string")
//     if (string.length <6){
//         console.log(string)
//     }
//     else{
//          console.log(string[0], (string.length)-2 , string[(string.length)-1])
//         }
// ****************************************************************************************************************
// problem7
// function fourstring(str){

//     if(str[0] == str[3] && str[1]==str[2]){
//         console.log("True This concept have two kinds of characters")
//     }
//     else if(str[0]==str[1] && str[2]==str[3]){
//         console.log("True This concept have two inds of characters")
//     }
//     else if(str[0]==str[2]&& str[1]==str[3]){
//         console.log("True This concept have two inds of characters")
//     }
//     else{
//         console.log("False This concept doesn't heave two kinds of characters")
//     }

// }
// fourstring("STTO")
// *********************************************************************************************************
// problem 8
// Javascript program to check whether a given
// tic tac toe board is valid or not

// This matrix is used to find indexes
// to check all possible winning triplets
// in board[0..8]

// Returns true if character 'c' wins.
// c can be either 'X' or 'O'
// function isCWin(board, c)
// {
// 	let win = new Array(new Array(0, 1, 2), // Check first row.
// 				new Array(3, 4, 5), // Check second Row
// 				new Array(6, 7, 8), // Check third Row
// 				new Array(0, 3, 6), // Check first column
// 				new Array(1, 4, 7), // Check second Column
// 				new Array(2, 5, 8), // Check third Column
// 				new Array(0, 4, 8), // Check first Diagonal
// 				new Array(2, 4, 6)); // Check second Diagonal
				
// 	// Check all possible winning combinations
// 	for (let i = 0; i < 8; i++)
// 		if (board[win[i][0]] == c &&
// 			board[win[i][1]] == c &&
// 			board[win[i][2]] == c )
// 			return true;
// 	return false;
// }

// // Returns true if given board is
// // valid, else returns false
// function isValid(board)
// {
// 	// Count number of 'X' and 'O'
// 	// in the given board
// 	let xCount = 0;
// 	let oCount = 0;
// 	for (let i = 0; i < 9; i++)
// 	{
// 		if (board[i] == 'X') xCount++;
// 		if (board[i] == 'O') oCount++;
// 	}

// 	// Board can be valid only if either
// 	// xCount and oCount is same or count
// 	// is one more than oCount
// 	if (xCount == oCount || xCount == oCount + 1)
// 	{
// 		// Check if 'O' is winner
// 		if (isCWin(board, 'O'))
// 		{
// 			// Check if 'X' is also winner,
// 			// then return false
// 			if (isCWin(board, 'X'))
// 				return false;

// 			// Else return true xCount and
// 			// yCount are same
// 			return (xCount == oCount);
// 		}

// 		// If 'X' wins, then count of X
// 		// must be greater
// 		if (isCWin(board, 'X') &&
// 				xCount != oCount + 1)
// 		return false;

// 		// If 'O' is not winner, then
// 		// return true
// 		return true;
// 	}
// 	return false;
// }

// // Driver Code
// let board = new Array('X', 'X', 'O','O',
// 			'O', 'X','X', 'O', 'X');
// if(isValid(board))
// 	document.write("Given board is valid");
// else
// 	document.write("Given board is not valid");
	
// This code is contributed
// by Saurabh Jaiswal


// *******************************************************************************************8
// problem9
// let a =['h','e','l','l','o']
// let char =prompt("Enter the letter")
// console.log(a.indexOf(char))
// console.log(a.lastIndexOf(char))
    //   ****************************************************************************************8888
// problem10
// function check (arr , num){
//     for (let i=0 ;i<=arr.length ;i++){
//         if (arr[i]+arr[i+1]==num ||arr[i]+arr[i+1]+arr[i+2]==num||arr[i]+arr[i+1]+arr[i+2]+arr[3]==num){
//             console.log("True")
//         }
//         else{
            
//         }
//     }
// }
// check ([1,2,3,4,5],7)