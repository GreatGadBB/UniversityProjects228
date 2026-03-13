"use strict"

const queue=[{v:"OP",p:7,o:1},{v:"OKSM",p:5,o:2},{v:"ASD",p:7,o:3},{v:"OPX",p:9,o:4},{v:"KPI",p:8,o:5},{v:"C",p:6,o:6},{v:"UA",p:4,o:7},{v:"ENG",p:2,o:8},{v:"OZ",p:2,o:9}];
function typeSearch(queue,type){
    if(!["highest","lowest","oldest","newest"].includes(type)) return queue.length+1;
    let memory;
    if(type==="highest"||type==="newest") memory=0; else if(type==="lowest"||type==="oldest") memory=Infinity;
    let govList;
    for(const i in queue){
        if(type==="highest"&&queue[i].p>=memory||type==="lowest"&&queue[i].p<=memory){
            memory=queue[i].p;
            govList=i;
        }else if(type==="newest"&&queue[i].o>=memory||type==="oldest"&&queue[i].o<=memory){
            memory=queue[i].o;
            govList=i;
        };
    };
    return govList;
};
const dbqp = {
    enqueue: function(queue,item,priority){
        queue.push({v:item,p:priority,o:queue[queue.length-1].o+1});
    },
    dequeue: function(queue,type){
        queue.splice(typeSearch(queue,type),1);
    },
    peek: function(queue,type){
        return queue[typeSearch(queue,type)];
    }
};
console.log(dbqp.peek(queue,"newest"),dbqp.peek(queue,"oldest"),dbqp.peek(queue,"highest"),dbqp.peek(queue,"lowest"));
dbqp.dequeue(queue,"newest");
dbqp.enqueue(queue,"JP",5);
dbqp.dequeue(queue,"oldest");
dbqp.dequeue(queue,"highest");
dbqp.dequeue(queue,"lowest");
console.log(dbqp.peek(queue,"newest"),dbqp.peek(queue,"oldest"),dbqp.peek(queue,"highest"),dbqp.peek(queue,"lowest"));