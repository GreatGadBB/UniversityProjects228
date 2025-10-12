const dox228 = [{name:"Donald Trump", phone:"your mom"},{name:"Joe Biden", phone:"your mama"},{name:"your mom",phone:"0279591"},{name:"me",phone:"0219999"}];
const dox229 = {
    "Donald Trump":"your mom",
    "Joe Biden":"your mama",
    "your mom":"0279591",
    "me":"0129999"};
const tasknum=9;
const findPhoneByName=(name)=>{
    if(tasknum===9){
        for(const i of dox228){
                if(i.name===name){
                    return i.phone; //NOWAYING iphone
                };
            };
    }else if(tasknum===10){
        return dox229[name];
    };
} ;
console.log(findPhoneByName("your mom"))
