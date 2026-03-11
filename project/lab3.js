"use strict"

function memoy(mf){
    const cache={};
    const maxCacheSize=15;
    return function(n){
        if (n in cache){
            cache[n].lfu++;
            return cache[n].v;
        };


        for(const i in cache){if(Date.now()-cache[i].lru>10) delete cache[i];}
        if (Object.keys(cache).length>=maxCacheSize){
            let least=Infinity;
            let list;
            for(const i in cache){
                if(cache[i].lru<least){
                    least=cache[i].lru;
                    list=i;
                };
            };
            delete cache[list];
        };

        
        console.log("new info")
        console.log(cache)
        cache[n]={v:mf(n),lfu:1,lru:Date.now(),};
        return cache[n].v;
    };
};
function fbsequence(n){
    if (n<=1) return n;
    return memEnd(n-2)+memEnd(n-1);
}
const memEnd = memoy(fbsequence);
for(let i=0;i<20;i++){
    console.log(memEnd(i));
}