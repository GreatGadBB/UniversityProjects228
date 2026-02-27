export function tmout(iterator, tdur){
    const tdursec=tdur*1000;
    const tstart=Date.now();
    while(Date.now()-tstart<tdursec){
        if((Date.now()-tstart)%250==0){         //c
            const genst=iterator.next().value;
            console.log(genst);
        }                                       //c
    }
    console.log("timeout");
};