function tableOf5(num,i) {
    return `${num} * ${i} = ${num*i}`;
}

let num = 5;
let length = 10;

for (let i = 1; i <= length; i++) {
    console.log(tableOf5(num,i));
}
