let change_owed = '.87';
const coins = [
  {
    type: 'quarter',
    value: 0.25
  },
  {
    type: 'dime',
    value: 0.1
  },
  {
    type: 'nickel',
    value: 0.05
  },
  {
    type: 'penny',
    value: 0.01
  }
];

function makeChange(coins, change_owed) {
  let change_remaining = change_owed;
  coins.forEach(coin => {
    console.log(coin.type);
  });
}

makeChange(coins, change_owed);
