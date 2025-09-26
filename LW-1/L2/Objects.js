const fn = () => {
    const what = {name:"Heisenberg"};
    let the = {name:"Jessie"};
    what.name="Not Heisenberg";
    the.name="Not Jessie";
    the={name:"Not Not Jessie"}
};
const createUser = (name,city) => {
    const blobra={name:name, city:city};
    return blobra;
};
console.log(createUser("Joe Biden","Ohio"));