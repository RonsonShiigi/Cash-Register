const myCalc = calculatorModule();
var mem = myCalc.memory
const tot = myCalc.total
var optArr=[];





//screen
var screen = document.getElementById('screen');

//numbers
var nums = document.getElementsByClassName('nums');
for(var i=0;i<nums.length;i++){
    nums[i].addEventListener('click',showNum)
};

function showNum(){
   
    if(screen.innerHTML==='0.00' ){
        screen.innerHTML = this.innerHTML
    }else{
        screen.innerHTML+=this.innerHTML
    }
}

//clear
const clear = document.getElementById('clear');
clear.addEventListener('click',clearIt);
function clearIt(){
    screen.innerHTML='0.00';
    mem = [];
    placeHold=0;
}


//add

const addBut = document.getElementById('add');
addBut.addEventListener('click',addIt)
function addIt(){
  mem.push(Number(screen.innerHTML));
  mem.push('+');
  console.log(mem);
  screen.innerHTML='0.00';  

}


//subtract
const subtractBut = document.getElementById('minus')
subtractBut.addEventListener('click',minusIt);
function minusIt(){
    mem.push(Number(screen.innerHTML));
    mem.push('-');
    console.log(mem);
    screen.innerHTML='0.00'
}

//multiply
const multiply = document.getElementById('multiply');
multiply.addEventListener('click',multiplyIt);
function multiplyIt(){
    mem.push(Number(screen.innerHTML));
    mem.push('x');
    console.log(mem);
    screen.innerHTML='0.00';

}

//divide
const divide = document.getElementById('divide');
divide.addEventListener('click',divideIt);
function divideIt(){
    mem.push(Number(screen.innerHTML));
    mem.push('÷');
    console.log(mem);
    screen.innerHTML='0.00'
}



//equals

const equals = document.getElementById('equals');
equals.addEventListener('click',runEm);

var placeHold = 0;
function runEm(){
    mem.push(Number(screen.innerHTML))
    console.log(mem)
    if(typeof mem[0]==='number'){
        placeHold = mem[0];
        console.log(placeHold)
    }else{
        throw error
    }
    
    for(var i=0;i<mem.length;i++){
       if(mem[i]==="+"){
           placeHold+=mem[i+1]
           console.log(placeHold)
       }else if(mem[i]==="-"){
           placeHold-=mem[i+1]
           console.log(placeHold)
       }else if(mem[i]==='x'){
           placeHold*=mem[i+1]
           console.log(placeHold)
       }else if(mem[i]==='÷'){
           placeHold/=mem[i+1]
           console.log(placeHold)
       }

        
    }
    screen.innerHTML=placeHold;
    mem=[];
    placeHold=0;

}



