
var mem = [];
const tot = 0;
var optArr=[];
var balance = 100;

//screen
var screen = document.getElementById('screen');

//numbers
var nums = document.getElementsByClassName('nums');
for(var i=0;i<nums.length;i++){
    nums[i].addEventListener('click',showNum)
};

function showNum(){
   
    if(screen.innerHTML==='0.00' || screen.innerHTML==='+' || screen.innerHTML==='-' || screen.innerHTML==='x' || screen.innerHTML==='÷'||
    screen.innerHTML.charAt(0)==='T' ||
    screen.innerHTML==='ERROR'||
    screen.innerHTML==='NaN' ||
    screen.innerHTML==='Insufficient Funds'){
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
//decimal button
const decimal = document.getElementById('decimal');
decimal.addEventListener('click',showNum);

//register stuff

//get balance
const balanceBut=document.getElementById('balance');
balanceBut.addEventListener('click',showBalance);
function showBalance(){
    screen.innerHTML = 'Total Balance: '+balance
}


//deposit button
const deposit = document.getElementById('deposit');
deposit.addEventListener('click',depositMoney);
function depositMoney(){
    var money = Number(screen.innerHTML);
    if(isNaN(money)===true){
        screen.innerHTML='ERROR'
    }else{
        
        var rounded = Math.round(100*money)/100;
        balance+=Number(rounded);
        screen.innerHTML='0.00';
    }
    
    
}

//withdraw button
const withdraw = document.getElementById('withdraw');
withdraw.addEventListener('click',withdrawCash);
function withdrawCash(){
    var money = Number(screen.innerHTML);
    if(money>balance){
        screen.innerHTML='Insufficient Funds'
    }else{
    if(isNaN(money)===false){
    var rounded = Math.round(100*money)/100
    balance-=Number(rounded);
    screen.innerHTML='0.00';
    }else{
        screen.innerHTML='ERROR'
    }
}
}


//menu and cart stuff

const menu = document.getElementsByClassName('menu');

for(var i=0;i<menu.length;i++){
    menu[i].addEventListener('click',shopping)
}

function shopping(){
    console.log(this.id)
    var cartItem = document.createElement('div');
    cartItem.className='cartItem';
    cartScreen.appendChild(cartItem);
    cartScreen.innerHTML='yomama'
    

}
