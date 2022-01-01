// Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).
// Input Size : |s| <= 10000000(complexity O(n))
// Sample Testcase :
// INPUT
// codekata
// OUTPUT
// ocedakat

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  str=userInput[0].split("");
  //console.log(str);
  var temp=[];
  //console.log(str);
  for(i=1,j=0;i<str.length;i=i+3,j++){
      //console.log(i,j);
      [temp[j],temp[++j]]=[str[i],str[--i]];
      //console.log(temp,i,j);
      }
  if((str.length%2)!=0){
      temp[str.length-1]=str[str.length-1];
  }
 
  
console.log(temp.join(""));
  //end-here
});