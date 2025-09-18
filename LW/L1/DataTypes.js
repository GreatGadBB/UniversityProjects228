const thatOneArray=[
    true, 'hello', 5, 12, -200,
    false, false, 'word', 'yo', 2734,
    ', ', 'const', true, 15118, false,
    true, true, 'thatOneArray', '=[true, ', 69]; //6 numbers, 7 strings, 7 booleans
const thatOneHash={ number:0, string:0, boolean:0};
const thatOneSecondHash={}
for(const key of thatOneArray){
    const type=typeof key;
    thatOneHash[type]++;
    thatOneSecondHash[type]=(thatOneSecondHash[type]||0)+1
};
console.dir(thatOneHash)
console.dir(thatOneSecondHash)
