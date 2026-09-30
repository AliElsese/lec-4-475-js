const nums = [1, 2, 4, 8, 100, 187, 90, 0, 4, 0];

// nums.forEach((num, index) => {
//     // console.log(index + " => " + "value = " + num);
//     console.log(`${index} => value = ${num}`);
//     // index => value = 1
// });

let mapMethod = nums.map((el, index) => {
    return el * 2;
});
console.log(mapMethod);

let filterMethod = nums.filter((num, index) => {
    return num > 0
});
console.log(filterMethod);

let findValue = nums.find((num, index) => {
    return num === 4
});
console.log(findValue);

let findIndex = nums.findIndex((num, index) => {
    return num === 0;
});
console.log(findIndex);

let someMethod = nums.some((num, index) => {
    return num < 0
});
console.log(someMethod);

let everyMethod = nums.every((num, index) => {
    return num >= 0
})
console.log(everyMethod)