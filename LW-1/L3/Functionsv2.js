const random=(max,min)=>{
    if(min===undefined){
        min=0;
    };
    return Math.floor(Math.random()*(max-min));
};
console.log(random(69));