// Calculate area of a rectangle
let length = 50;
let width = 40;
let area = length * width ;
console.log("Area of rectangle is: " + area);

// The Temperature Converter
let fahrenheit = 54;
celcius = (fahrenheit - 32) / 1.8;
console.log(`${celcius}°C is ${fahrenheit}°F`);
fahrenheit = (celcius * 1.8) + 32;
console.log(`${fahrenheit}°F is ${celcius}°C`);

// Numbers' summations
let nums = [23,54,32,87,47]
let total = 0;
nums.forEach(function(num){
    total += num
})
console.log(total)

// Maximum number
let arr =[16,4,2,0,19,6] ;
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)

// Reverse Array
let arr1 =  [1,2,3,4,5,6,7,8,9,10].reverse();
console.log(arr1);

// Stars pattern
let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);


