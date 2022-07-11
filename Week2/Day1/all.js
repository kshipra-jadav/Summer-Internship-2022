const set1 = new Set([1, 2])
console.log(set1) // Output :- Set(2) { 1, 2 }

const set2 = new Set(["Hello", "Everybody"])
console.log(set2) // Output :- Set(2) { 'Hello', 'Everybody' }

const set3 = new Set([...set1, ...set2])
console.log(set3) // Output :- Set(4) { 1, 2, 'Hello', 'Everybody' }