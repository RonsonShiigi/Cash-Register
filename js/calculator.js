// function calculator(){
//     function hello(){
//         return 'hello';
//     }
//     return{
//         hello: hello
//     }
// }

var calculatorModule = function(){
    
    var memory = [];
    var total=0;
    
    var calculator= {
        load: function(x){
            if(typeof x === 'number'){
                total=x;
                return total
            }else{
                throw error 
            }
           
        },
        getTotal:function(){
            return total
        },
        add:function(x){
            if(typeof x === 'number'){
                total += x;
                return total
            }else{
                throw error
            }
        },
        subtract:function(x){
            if(typeof x === 'number'){
                total -= x;
                return total
            }else{
                throw error
            }
        },
        multiply:function(x){
            if(typeof x === 'number'){
                total *= x;
                return total
            }else{
                throw error
            }
        },
        divide:function(x){
            if(typeof x === 'number'){
                total /= x;
                return total
            }else if(x=0){
                throw error
            }
            else{
                throw error
            }
        },
        recallMemory: function(){
            return memory
        },
        saveMemory:function(x){
            memory=total;
            return memory;
        },
        clearMemory:function(){
            memory=0;
            return memory
        }
    };
return {
    calculator ,
    total,
    memory
}
    
    
    
    };