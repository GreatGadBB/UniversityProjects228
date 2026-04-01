"use strict"
import {EventEmitter} from "events";
const emitter = new EventEmitter();
const wtf={
    start(){emitter.emit("start")}
}
const tatsuki={
    asa(anyname){
        const start=()=>{
            console.log(tatsuki.name,"- thank you,",anyname);
            emitter.emit("csm1",anyname);
        }
        const csm2=(why)=>{
            console.log(tatsuki.name,"- because um...",why);
            emitter.emit("csm3");
        }
        const csm3=()=>{
            console.log("\nThe end!");
        }
        emitter.on("start",start);
        emitter.on("csm2",csm2);
        emitter.on("csm3",csm3);
        setTimeout(()=>{
            emitter.off("csm3",csm3);
            emitter.emit("csm3");
        },1000);
    },
    name: "asa"
}
const fujimoto={
    denji(explanationQuestionMark){
        const csm1=(name)=>{
            console.log(fujimoto.name," -",name,"?");
            emitter.emit("csm2",explanationQuestionMark);
        }
        const csm3=()=>{
            console.log(fujimoto.name,"- oh, yeah");
            emitter.off("csm3",csm3);
        }
        emitter.on("csm1",csm1);
        emitter.on("csm3",csm3);
    },
    name: "denji"
}
fujimoto.denji("you are the guy with the chainsaw");
tatsuki.asa("chainsaw man");
wtf.start();