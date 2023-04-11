// 1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
let food=["eating"];
function  eating (food){
    let a=food.reverse("")
    console.log(a);

}
eating(food)
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function num(nums){function dividenum(nums)
    if(num.length<=1){
        return num;
    }
   

let middle=Math.floor(num.length/2);
let left=num.slice(0,middle);
let right=num.slice(middle)
console.log(left);
console.log(right);
return sortednum(dividenum(left),dividenum(right));
}

function dividenum(left,right){
    let emptynum=[];
    console.log(empty);
    console.log(left);
    console.log(right);
    while(left.length && right.length){
        if (left[0]<right[0]){
            emptynum.push(left.shift());
        }
    }
  
}


// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let year= [2000,2023];
let a = years.split()
console.log(year)

// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5

    