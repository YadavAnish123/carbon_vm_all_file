const {Given, When,Then}=require('@cucumber/cucumber')
 
Given('Numbers are provided', function () {
     a=5;
     b=10;
    return console.log("Taking two number"+a+" "+" "+b);
});
 
 
 
When('sum up both the numbers here', function () {
   c=a+b;
    return  console.log("adding two numbers");
});


Then('display the sum of numbers', function () {
   
    return console.log("sum of the two number are "+c);
});