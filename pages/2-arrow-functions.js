document.title = '2-arrow-functions';

const original = function(){
    let a = 100;
    return a;
}
console.log(original())

function original2(){
    return 200;
}
 console.log(original2())

const arrow =(num = 10,num2 = 2)=>{
    return 150 + num*num2;
}
console.log('arrow default',arrow())
console.log(arrow(50, 40))

const arrow2 = (num,num2) => 150 + num*num2;
console.log( arrow2(50, 5) )

const arrow3 = num => 150 + num;
console.log( arrow3(60) )

const obj ={
    name: "WFM",
    value: original,
    logName: function(){
        let self = this;
        setTimeout(function(){
            console.log('Name: ',self.name);
        }, 1000);
        setTimeout( ()=> console.log('Value: ',this.value), 2000);
    }
}


try{
    obj.logName();
} catch(e){
    console.log(e)
}


