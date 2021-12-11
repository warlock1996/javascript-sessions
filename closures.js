/*
  1 --> closures are simply some backpack memory attached to function defined inside another function
  2 --> closures give persistent state across multiple function invocations
  3 --> practical applications can be expensive lookup operations (memoizations) similar to react or v-once in vuejs
*/

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log('[inner]', count)
  }
  function inner2() {
    count++;
    console.log('[inner2]', count)
  }
  return [inner, inner2];
}

