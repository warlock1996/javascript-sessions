
let count = 0;
function increment() {
  count++;
  console.log("[in function increment]")
}

console.time()
setTimeout(() => {
  console.timeEnd()
  console.log("[in setTimeout]")
}, 0)

for (let i = 0; i < 10000000; i++) {
}


console.log('hi all :-)')
increment()

