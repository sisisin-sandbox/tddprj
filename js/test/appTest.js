const expect = require('chai').expect;
import Klass from '../lib/app';

describe('Klass', () => {
  const sut = new Klass({hoge:'hoge', fuga:'fuga'});
  
  it('constructor hoge', () => {
    expect(sut.hoge).to.equal('hoge');
  });
  it('counstructor fuga', () => {
    expect(sut.fuga).to.equal('fuga');
  });
});
