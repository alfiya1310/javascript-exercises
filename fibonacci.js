function fibonacci(num) {
    let array1 = [];
	let num1 = 0;
	let num2 = 1;
	let temp;
	for (let i = 1; i <= num; i++) {
	    array1.push(num1);
		temp = num1 + num2;
		num1 = num2;
		num2 = temp;
	}
	return array1;
}

let ans = fibonacci(10);
for(element of ans)
{
    console.log(element);
}
