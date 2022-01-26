while (true) {
    let num = Math.floor(Math.random() * (100 - 1)) + 1;
    if (isNotPrime(num)) {
        console.log(num);
    }
    else {
        console.log(num);
        break;
    }
}

function isNotPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
}
