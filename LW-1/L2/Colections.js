const dox228 = [{name:"Donald Trump", phone:"Classified"},{name:"Joe Biden", phone:"Unknown"},{name:"DTEK",phone:"0279591"},{name:"me",phone:"0219999"}];
const dox229 = {
    "Donald Trump":"Classified",
    "Joe Biden":"Unknown",
    "DTEK":"0279591",
    "me":"0129999"};
const findPhoneByName=(name,a)=>{
    if(tasknum===1){
        for(const i of dox228){
                if(i.name===name){
                    return i.phone; //NOWAYING iphone
                };
            };
    }else if(tasknum===2){
        return dox229[name];
    };
} ;
console.log(findPhoneByName("DTEK",1));
console.log(findPhoneByName("DTEK",2));
