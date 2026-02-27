export function* fbsequence(){
    let j=0;
    let i=1;
    while(true){
        yield i;
        [j,i]=[i,j+i];
    };
};