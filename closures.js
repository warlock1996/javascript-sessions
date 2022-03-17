/*
  1 --> closures are simply some backpack memory attached to function defined inside another function
  2 --> closures give persistent state across multiple function invocations
  3 --> practical applications include expensive lookup operations (memoizations) similar to react or v-once in vuejs
*/

// const outer = () => {
// 	let count = 0
// 	const inner = () => {
// 		if (count > 0) {
// 			console.warn('the component is already rendered !')
// 		} else {
// 			console.log(count++)
// 		}
// 	}
// 	return inner
// }

// const res = outer()

// res()
// res()
// res()

// generators example
// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = generator(); // "Generator { }"

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3