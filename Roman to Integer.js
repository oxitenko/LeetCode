// Given a roman numeral, convert it to an integer.

const map = new Map();

map
    .set("I", 1)
    .set("V", 5)
    .set("X", 10)
    .set("L", 50)
    .set("C", 100)
    .set("D", 500)
    .set("M", 1000)

function romanToInt(s) {
    let acc = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "I" && s[i + 1] === "V") {
            acc += 4
            i++
        } else if(s[i] === "I" && s[i + 1] === "X") {
            acc += 9
            i++
        } else if(s[i] === "X" && s[i + 1] === "L") {
            acc += 40
            i++
        } else if(s[i] === "X" && s[i + 1] === "C") {
            acc += 90
            i++
        } else if(s[i] === "C" && s[i + 1] === "D") {
            acc += 400
            i++
        } else if(s[i] === "C" && s[i + 1] === "M") {
            acc += 900
            i++
        } else acc += map.get(s[i])
    }

    return acc;
};