'use strict';

const schizo = "okFDSfashuidfahtidsiuycaiod789y8h7aifi ioawytw i"; //i just slammed my keyboard
const generateKey=(lenght,characters)=>{
    let key = "";
    for(let i=0; i<=lenght-1; i++){
        key=key+characters[Math.floor(Math.random()*(characters.length))];
    };return key;
};console.log(generateKey(18,schizo));