const average = (a,b) => (a+b)/2;
const square = (x) => x*x;
const cube = (x) => x*x*x;
const mathBtw=[];
for(let i=0; i<=9; i++){
    mathBtw.push(average(square(i),cube(i)));
};
console.log(mathBtw);