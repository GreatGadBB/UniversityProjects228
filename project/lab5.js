"use strict"

const arrFunc=[1,2,3];
const control = new AbortController()

function callbackFunc(narr,cstmFunc,call,abrt){
    const resar=[];
    setTimeout(()=>{
        for(let i of narr){
            if(abrt.aborted) return call("Aborted");
            resar.push(cstmFunc(i));
        }
        call(resar);
    },1000)
}
function promiseFunc(narr,cstmFunc,abrt){
    return new Promise((resolve,reject)=>{
        const resar=[];
        setTimeout(()=>{
            try{
                for(let i of narr){
                    if(abrt.aborted) return reject("Aborted");
                    resar.push(cstmFunc(i));
                }
                resolve(resar);
            }catch(err){
                reject(err);
            }
    },1000)
    })
}
callbackFunc(arrFunc,x=>x*x,(res)=>{
    if(["Aborted"].includes(res)){
        console.log(res)
    }else{
        console.log(res," callback");
    }
},control.signal)
async function promRes(){
    try{
        const res = await promiseFunc(arrFunc,x=>x*x,control.signal);
        console.log(res," promise")
    }catch(res){
        console.log(res)
    }
}
setTimeout(()=>control.abort(),1500)
promRes();
console.log("first?")