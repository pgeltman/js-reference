import { equal } from 'assert';
import { nameID } from '../excercises/weddingInvites/index.js';
const should = require('chai').should();

describe('Wedding Invites', () => {
  it('Blank name', () => {
    const name = nameID('');
    name.main.title.should.equal('');
    name.main.firstName.should.equal('');
    name.main.lastName.should.equal('');
    name.partner.title.should.equal('');
    name.partner.firstName.should.equal('');
    name.partner.lastName.should.equal('');
    name.andGuest.should.equal(false);
    name.andFamily.should.equal(false);
  });
  it('Title', () => {
    const name = nameID('Ms. Brooke Briseno');
    name.main.title.should.equal('Ms.');
  });
  it('Single Person', () => {
    const name = nameID('Ms. Brooke Briseno');
    name.main.title.should.equal('Ms.');
    name.main.firstName.should.equal('Brooke');
    name.main.lastName.should.equal('Briseno');
  });
  it('And Guest', () => {
    const name = nameID('Ms. Ashlyn Rogers & Guest');
    name.andGuest.should.equal(true);
  });
  it('two named people', () => {
    const name = nameID('Mr. Michael Gould and Ms. Sandra Badillo');
    name.main.title.should.equal('Mr.');
    name.main.firstName.should.equal('Michael');
    name.main.lastName.should.equal('Gould');
    name.partner.title.should.equal('Ms.');
    name.partner.firstName.should.equal('Sandra');
    name.partner.lastName.should.equal('Badillo');
    name.andGuest.should.equal(false);
    name.andFamily.should.equal(false);
  });
  it('named couple', () => {
    const name = nameID('Mr. And Mrs. Kevin Murray');
    name.main.title.should.equal('Mr.');
    name.main.firstName.should.equal('Kevin');
    name.main.lastName.should.equal('Murray');
    name.partner.title.should.equal('Mrs.');
    name.partner.lastName.should.equal('Murray');
    name.andGuest.should.equal(false);
    name.andFamily.should.equal(false);
  });
  it('and Family', () => {
    const name = nameID('Mr. and Mrs. Jeremy Geltman & Family');
    name.andFamily.should.equal(true);
  });
  it.skip('Edge Case', () => {
    const name = nameID('Drs. Daniel and Janine Heller');
    name.main.title.should.equal('Dr.');
    name.main.firstName.should.equal('Daniel');
    name.main.lastName.should.equal('Heller');
    name.partner.title.should.equal('Dr.');
    name.partner.firstName.should.equal('Janine');
    name.partner.lastName.should.equal('Heller');
    name.andGuest.should.equal(false);
    name.andFamily.should.equal(false);
  });
});
