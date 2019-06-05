//Problem: Wedding invites
//Inputs: An array of guests coming to a party
//Output: A tabular output that semantically has identified each element in the name

//To Dos: Can we block the last name if the person doesn't have a guest?
//can we put an indicator next to spouse first name so that we know which one's we need to get

import guestList from './guestList';
import fs from 'fs';

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
    this.title = '';
    this.firstName = '';
    this.lastName = '';
  }
}

function wordType(word) {
  if (word !== undefined) {
    word = word.toLowerCase();
    if (word === '&' || word === 'and') {
      return 'and';
    } else if (word === 'guest') {
      return 'guest';
    } else if (word === 'family') {
      return 'family';
    } else if (word.endsWith('.') === true) {
      return 'title';
    } else {
      return 'name';
    }
  }
}

function nameID(name) {
  let row = new ZolaRow();
  const sections = name.split(' ');

  if (sections.length === 1) {
    console.log(sections);
    return row;
  }

  let title, person;
  title = person = 'main';
  let currentName = '';

  for (let i = 0; i < sections.length; i++) {
    let word = sections[i];
    let nextWord = sections[i + 1];

    if (wordType(word) === 'and') {
      //do nothing
    } else if (wordType(word) === 'guest') {
      row.andGuest = true;
    } else if (wordType(word) === 'family') {
      row.andFamily = true;
    } else if (wordType(word) === 'title') {
      if (word === 'Drs.') {
        row.main.title = 'Dr.';
        row.partner.title = 'Dr.';
      } else if (title === 'main') {
        row.main.title = word;
        title = 'partner';
      } else if (title === 'partner') {
        row.partner.title = word;
      } else console.log(title);
    } else if (wordType(word) === 'name') {
      if (wordType(nextWord) === 'name') {
        currentName += word + ' ';
      } else {
        if (person === 'main') {
          row.main.firstName = currentName;
          row.main.lastName = word;
          //row.partner.lastName = word;
          person = 'partner';
        } else {
          row.partner.firstName = currentName;
          row.partner.lastName = word;
        }

        currentName = '';
      }
    }
  }

  if (row.partner.title !== '' && row.partner.firstName === '') {
    row.partner.firstName = '[Spouse]';
    row.partner.lastName = row.main.lastName;
  }

  return row;
}

function zolafy(o) {
  return `${
    o.main.title
  },${o.main.firstName.trim()},${o.main.lastName.trim()},,${
    o.partner.title
  },${o.partner.firstName.trim()},${o.partner.lastName.trim()},,${
    o.andGuest ? 'yes' : ''
  },,,,,,,,,${o.andFamily ? '[Child]' : ''},${
    o.andFamily ? o.main.lastName.trim() : ''
  }`;
}

export { nameID };

let final = '';

//final = nameID('Ms. Brooke Briseno');
//final = nameID('Ms. Ashlyn Rogers & Guest');
//final = nameID('Mr. Michael Gould and Ms. Sandra Badillo');
//final = nameID('Mr. And Mrs. Kevin Murray');
//final = nameID('Mr. and Mrs. Jeremy Geltman & Family');

console.log(final);

guestList.forEach(name => {
  let guestObject = nameID(name.trim());
  let guestRow = zolafy(guestObject);
  console.log(guestRow);
});
