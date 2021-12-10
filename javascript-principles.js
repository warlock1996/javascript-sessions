
let count = 0;

function increment() {
  count++;
  console.log("[in function increment]")
}

setTimeout(() => {
  console.log("[in setTimeout]")
}, 0)


console.log('hi all :-)')

increment()

