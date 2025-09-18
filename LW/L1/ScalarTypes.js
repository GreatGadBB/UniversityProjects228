function inc(n){
    return (1+(1/n))**n;
};
const jeden=999;
const dwa=inc(jeden);
console.dir({jeden,dwa});

function incTwo(a){
    a.aaa=a.aaa/(-1);
};
const aa={ aaa:1 };
incTwo(aa);
console.dir(aa);