// The Tribonacci sequence Tn is defined as follows:
//  T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
//  Given n, return the value of Tn.

function tribonacci(n) {
    if (n === 0) {
        return 0
    }
    if (n < 3) {
        return 1
    }

    let x = 0;
    let y = 1;
    let z = 1;
    let ans;

    for (let i = 3; i <= n; i++) {
        ans = x + y + z;
        x = y;
        y = z;
        z = ans;
    }

    return ans;
};