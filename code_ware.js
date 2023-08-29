// Multiples of 3 or 5
function solution(number) {
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
            sum += i
        }
    }
    return sum
}

// https://www.codewars.com/kata/530e15517bc88ac656000716
function rot13(message) {
    if (message === '') return ''
    const boundary = {
        z: 122,
        Z: 90,
        a: 96,
        A: 64
    }
    let mod
    let output
    mod = message.split('').map((x, i) => {
        if (/[a-zA-Z]/.test(x)) {
            x = message.charCodeAt(i) <= boundary.Z ? ((boundary.Z - message.charCodeAt(i) >= 13) ? message.charCodeAt(i) + 13 : ((boundary.A + (13 - (boundary.Z - message.charCodeAt(i)))))) : ((boundary.z - message.charCodeAt(i) >= 13) ? message.charCodeAt(i) + 13 : ((boundary.a + (13 - (boundary.z - message.charCodeAt(i))))))
            return x
        }
        else {
            return x
        }

    })

    for (i = 0; i < mod.length; i++) {
        let mod2 = mod.map((x, i, arr) => {
            if (x >= 64 && x <= 122) {
                x = String.fromCharCode(arr[i])
                return x
            }
            else { return x }
        })
        output = mod2.join('')
    }
    return output
}
// https://www.codewars.com/kata/59325dc15dbb44b2440000af
function isAlt(word) {
    let even = word.split('').filter((x, i) => i % 2 === 0)
    let odd = word.split('').filter((x, i) => i % 2 !== 0)
    if ((even.every(x => /[a|e|i|o|u]/.test(x)) && (odd.every(x => /[^a|e|i|o|u]/.test(x)))) || (odd.every(x => /[a|e|i|o|u]/.test(x)) && (even.every(x => /[^a|e|i|o|u]/.test(x)))))
        return true
    else {
        return false
    }
}
// https://www.codewars.com/kata/554ca54ffa7d91b236000023
function deleteNth(arr, n) {
    const result1 = arr.reduce((x, y) => {
        let count = 0;
        if (x[y]) x[y] = ++x[y]
        else {
            x[y] = ++count;
        }
        return x
    }, {})
    for (const prop in result1) {
        result1[`${prop}`] = 0
    }
    let arr1 = [];
    arr.forEach(x => {
        if (result1[x] != n) {
            arr1.push(x);
            result1[x] = ++result1[x]
        }
    })
    return arr1
}