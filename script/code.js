let buttons = document.querySelector('.buttons')
let btn = buttons.querySelectorAll('button')
let outputRes = document.getElementById('output')

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
    if(this.innerHTML == '='){
      outputRes.innerHTML = eval(outputRes.innerHTML);
    } else{
      if(this.innerHTML == 'CE'){
        outputRes.innerHTML = "";
      } else{
        outputRes.innerHTML += this.innerHTML;
      } 
    }
  })
}