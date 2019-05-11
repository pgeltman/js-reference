//Problem: Make change
//Inputs: a floating point integer of change owed
//Output: the assorted coins and counts required to make change
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

function makeChange(coins, change_owed) {
  let change = [];
  let bal_due = change_owed * 100;
  coins.forEach(coin => {
    //determine the coins that can go into remaining change owed
    let coin_count = Math.floor(bal_due / coin.value);
    let res = { Coin: coin.type, Count: coin_count };
    change.push(res);
    bal_due = bal_due - coin_count * coin.value;
  });
  return change;
}

console.log(makeChange(coins, '.87'));
