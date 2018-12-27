
var mem = [];
const tot = 0;
var optArr=[];
var balance = 100;
var sale=0;

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
};

//Price Total button
const priceTotal = document.getElementById('priceTotal');
priceTotal.addEventListener('click',showPrice);
function showPrice(){
    screen.innerHTML=sale;
}


//menu and cart stuff

const menu = document.getElementsByClassName('menu');
var total = document.getElementById('total');
total.innerHTML="Total: "+ sale;

for(var i=0;i<menu.length;i++){
    menu[i].addEventListener('click',shopping)
}

function shopping(){
    
    //item box and children
   var itemBox = document.createElement('div');
   itemBox.className='itemBox'
   var order = document.createElement('div');
   order.className='order';
   var price = document.createElement('div');
   price.className='price';

   cart.appendChild(itemBox);
   itemBox.appendChild(order);
   itemBox.appendChild(price);

    //menu items...theres def a better way to do this haha but o well for now
   if(this.id==='popcornSmall'){
       order.innerHTML='Small Popcorn';
       price.innerHTML='6.00'
   }else if(this.id==='drinkSmall'){
       order.innerHTML='Small Drink';
       price.innerHTML='5.00'
   }else if(this.id==='popcornKeiki'){
       order.innerHTML='Keiki Popcorn';
       price.innerHTML='5.00'
   }else if(this.id==='hotdog'){
       order.innerHTML='Hotdog';
       price.innerHTML='3.50'
   }else if(this.id==='candy'){
       order.innerHTML='Box Candy';
       price.innerHTML='3.75';
   }else if(this.id==='combo1'){
       order.innerHTML='Combo 1';
       price.innerHTML='15.00'
   }
   //rowTwo
   else if(this.id==='popcornMedium'){
    order.innerHTML='Medium Popcorn';
    price.innerHTML='7.00';
    }else if(this.id==='drinkMedium'){
    order.innerHTML='Medium Drink';
    price.innerHTML='6.00   '
    }else if(this.id==='drinkKeiki'){
    order.innerHTML='Keiki Drink';
    price.innerHTML='3.00';
    }else if(this.id==='iceCream'){
    order.innerHTML='Ice-Cream';
    price.innerHTML='5.00';
    }else if(this.id==='nachos'){
    order.innerHTML='Nachos';
    price.innerHTML='4.25';
    }else if(this.id==='combo2'){
    order.innerHTML='Combo 2';
    price.innerHTML='18.00';
    }
    //row3
    else if(this.id==='popcornLarge'){
    order.innerHTML='Large Popcorn';
    price.innerHTML='8.00';
    }else if(this.id==='drinkLarge'){
    order.innerHTML='Large Drink';
    price.innerHTML='7.00';
    }else if(this.id==='slurpee'){
    order.innerHTML='Slurpee';
    price.innerHTML='6.00';
    }else if(this.id==='arare'){
    order.innerHTML='Mochi Crunch';
    price.innerHTML='3.75';
    }else if(this.id==='hurricane'){
    order.innerHTML='Hurricane Mix';
    price.innerHTML='3.75';
    }else if(this.id==='combo3'){
    order.innerHTML='Combo 3';
    price.innerHTML='20.00';
    }
    sale+=Number(price.innerHTML);
    total.innerHTML="Total: "+ sale;
    
    
    
};

//clear button
const clearCart=document.getElementById('clearCart');
clearCart.addEventListener('click',wash);
function wash(){
    cart.innerHTML="";
    sale=0;
    total.innerHTML='Total: '+sale;
}











