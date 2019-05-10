// Async and Await examples
let excercise = [];

/* Exercise 0: 4 Events getting executed in the event loop
 * Description:
 */
excercise[0] = () => {
  console.log('1: sync');
  setTimeout(_ => console.log('2: timeout'));
  Promise.resolve().then(_ => console.log('3: promise'));
  console.log('4: sync');
};

//an example of async and await that currently spits out
//something in the opposite order than I think it realistically should
excercise[1] = () => {
  const fun = async () => {
    await setTimeout(async () => {
      console.log('step 1');
    }, 500);
    await setTimeout(async () => {
      console.log('step 2');
    }, 200);
  };

  fun();
};

excercise[1]();
