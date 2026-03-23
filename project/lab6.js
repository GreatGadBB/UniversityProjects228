"use strict"
const control=new AbortController()
async function* mainThing(dataL){
    let i=1;
    while(i<=dataL){
        await new Promise(res => setTimeout(res, 100));
        yield i++;
    };
}
async function mainProcess(dataL, abrt){
    for await(let i of mainThing(dataL)){
        if(abrt.aborted) return;
        console.log(i);
    }
}
mainProcess(10000, control.signal);
setTimeout(()=>control.abort(),5000);