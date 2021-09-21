const  input = document.getElementById(elementld,"formControlRange")
const  min=input.min
const max = input.max
const  value= input.value

input.style.background= 'linear-gradient(to right, red 0%, red ${(value-min)/(max-min)*100}%, blue ${(value-min)/(max-min)*100}%,blue 100%)'
oninput=function (){
    this.style.background = 'linear-gradient(to right, red 0%, red ${(this.value-this.min)/(this.max-this.min)*100}%, blue ${(this.value-this.min)/(this.max-this.min)*100}%,blue 100%)'
}




