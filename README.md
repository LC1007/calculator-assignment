# calculator-assignment
At first I tried building the calculator on my own but struggled a bit, I then started search our to create a calculator using the eval() function and I came across a youtube video that built a calculator. I used their code but I first tried to understand the code before I did anything, so I'm going to explain what each part does down below.

// Here I'm placing the div that contains all buttons from my html file into a variable called buttons
let buttons = document.querySelector('.buttons') 

// Here I'm placing all the buttons from my html file into a variable called btn
let btn = buttons.querySelectorAll('button')

// Here I'm placing the output into a variable called outputRes to display the results
let outputRes = document.getElementById('output') // 

// The below code is looping through all the buttons and then adding a event listener on each button 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
// The purpose of this event listener is to listen for the = button, once I press the = button the first if statement is true and will run ( // outputRes.innerHTML = eval(outputRes.innerHTML);) code snippet which takes whatever numbers you've entered and does the calculation which // the eval() function will do.
    if(this.innerHTML == '='){
      outputRes.innerHTML = eval(outputRes.innerHTML);
// This else statement then checks if I pressed the CE button which if comes to true then sets the outputRes variable back to en empty string // which deletes everything.
    } else{
      if(this.innerHTML == 'CE'){
        outputRes.innerHTML = "";
// This code snippet displays whatever numbers I pressed into the outputRes variable which holds to the #output and in this case its an h1 tag
      } else{
        outputRes.innerHTML += this.innerHTML;
      } 
    }
  })
}
