const range = (start,end) =>{
    const ewMath=[];
    for(let i=start; i<=end; i++){
        ewMath.push(i);
    };
    return ewMath;
};
const rangeOdd = (start,end) => {
    const ew2Math_1=[];
    for(let i=start; i<=end;i++){
        if(i%2===1){
            ew2Math_1.push(i);
        };};
    return ew2Math_1;
};
console.log(range(15,30));
console.log(rangeOdd(15,30));