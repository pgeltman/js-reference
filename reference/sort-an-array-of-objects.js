//Use case: if you have an array of objects and you want to sort it by an object of by a paticular attribute

const coins_list = [
  {
    type: 'quarter',
    value: 25
  },
  {
    type: 'dime',
    value: 10
  },
  {
    type: 'nickel',
    value: 5
  },
  {
    type: 'penny',
    value: 1
  }
];

//sort coins largest to smallest
const coins = coins_list.sort((a, b) => {
  if (a.value > b.value) {
    return -1;
  }
  if (a.value < b.value) {
    return 1;
  } else return 0;
});
