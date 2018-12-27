
 //add

const addBut = document.getElementById('add');
addBut.addEventListener('click',addIt)
function addIt(){
  mem.push(Number(screen.innerHTML));
  mem.push('+');
  console.log(mem);
  screen.innerHTML='+';  

}


//subtract
const subtractBut = document.getElementById('minus')
subtractBut.addEventListener('click',minusIt);
function minusIt(){
    mem.push(Number(screen.innerHTML));
    mem.push('-');
    console.log(mem);
    screen.innerHTML='-'
}

//multiply
const multiply = document.getElementById('multiply');
multiply.addEventListener('click',multiplyIt);
function multiplyIt(){
    mem.push(Number(screen.innerHTML));
    mem.push('x');
    console.log(mem);
    screen.innerHTML='x';

}

//divide
const divide = document.getElementById('divide');
divide.addEventListener('click',divideIt);
function divideIt(){
    mem.push(Number(screen.innerHTML));
    mem.push('÷');
    console.log(mem);
    screen.innerHTML='÷'
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