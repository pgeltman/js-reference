//Use case: if you have an array of objects and you want to sort it by an object of by a paticular attribute

const unsorted_array = [
  {
    name: 'Jean Luc',
    value: 250
  },
  {
    name: 'Wesley',
    value: 1
  },
  {
    name: 'Data',
    value: 50
  },
  {
    name: 'Riker',
    value: 150
  }
];

//sort coins largest to smallest
const sorted_array = unsorted_array.sort((a, b) => {
  if (a.value > b.value) {
    return -1;
  }
  if (a.value < b.value) {
    return 1;
  } else return 0;
});

console.log(sorted_array);
