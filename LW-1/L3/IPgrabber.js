'use strict';

const ip = "192.168.1.10";
const ipgrabber = (grabber) =>{
    const ipArr=grabber.split(".");
    const ipNum=(ipP, i)=>(ipP<<8)+parseInt(i);
    return ipArr.reduce(ipNum,0);
};console.log(ipgrabber(ip));