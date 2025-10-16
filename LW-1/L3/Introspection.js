const blobra={
  m1:x=>[x],
  m2:function(x, y){return [x, y];},
  m3(x, y, z){return [x, y, z];}
};const idkwhatiamdoing=(iface)=>{
    const pigusha=[];
    for (let i in blobra){
        if (typeof iface[i]==="function"){
            pigusha.push([i,iface[i].length]);
        };
    };return pigusha;
};console.log(idkwhatiamdoing(blobra));