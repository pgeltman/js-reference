//Problem: Wedding invites
//Inputs: An array of guests coming to a party
//Output: A tabular output that semantically has identified each element in the name
import guestList from './guestList';

class ZolaRow {
  constructor() {
    this.main = new Person();
    this.partner = new Person();
    this.andGuest = false;
    this.andFamily = false;
  }
}

class Person {
  constructor() {
    this.title = '[title]';
    this.firstName = '[first]';
    this.lastName = '[last]';
  }
}

function decodeWord(word) {
  word = word.toLowerCase();

  if (word === '&' || word === 'and') {
    return 'a';
  } else if (word === 'guest') {
    return 'g';
  } else if (word === 'family') {
    return 'f';
  } else if (word.endsWith('.') === true) {
    return 't';
  } else {
    return 'n';
  }
}

function nameID(name) {
  let row = new ZolaRow();

  const sections = name.split(' ');

  let pattern = '';

  sections.forEach(word => {
    pattern += decodeWord(word);
  });

  //console.log(pattern + ': ' + name);

  //tnn
  if (/^tn+$/.test(pattern)) {
  } else if (/^tn+ag$/.test(pattern)) {
    //console.log('tnnag action');
  } else if (/^tn+atn+$/.test(pattern)) {
    //console.log('tnnatnn action');
  } else if (/^tatn+$/.test(pattern)) {
    //console.log('tatnn action');
  } else if (/^tatn+af$/.test(pattern)) {
    //console.log('tatnnaf action');
  } else {
    console.log(`unknown (${pattern}): ${name}`);
  }

  for (let i = 0; i < pattern.length; i++) {}

  return row;
}

export { nameID };

nameID('Ms. Brooke Briseno'); //tnn
nameID('Ms. Ashlyn Rogers & Guest'); //tnnag
nameID('Mr. Michael Gould and Ms. Sandra Badillo'); //tnnatnn
nameID('Mr. And Mrs. Kevin Murray'); //tatnn
nameID('Mr. and Mrs. Jeremy Geltman & Family'); //tatnnaf

guestList.forEach(name => {
  nameID(name.trim());
});
