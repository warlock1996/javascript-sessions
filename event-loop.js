/* 
  1 --> async callbacks go into macrotask-queue/task-queue/callback-queue
  2 --> promise callbacks go into microtask-queue/job-queue
  3 --> Callstack executes code synchronously, so any code that is to be executed should be pushed 
        onto callstack

  4 --> The EVENT-LOOP is literally a while loop which constantly checks 
        for all the queues and the callstack mentioned
        above, and deques any callback who's turn is to be executed !
        EVENT-LOOP Rules:
          1 --> It proirites certain queues over other queues.
                Order: microtasks-queue --> callback-queue  


  check out these links:
  https://www.youtube.com/watch?v=8aGhZQkoFbQ
  https://dmitripavlutin.com/javascript-promises-settimeout/
  https://frontendmasters.com/courses/javascript-hard-parts-v2/
*/ 


let count = 0;

function increment() {
  count++;
  console.log("[in function increment]")
}

Promise.resolve().then(() => console.log('[promise callback]'))

setTimeout(() => {
  console.log("[in setTimeout]")
}, 0)


console.log('hi all :-)')

increment()

