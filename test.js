var expect = require('chai').expect
  , file = require('./')
  
describe('file', function() {

  it('should read file', function(){
    expect(file('.gitignore').split('*').pop()).to.eql('.log')
  })
  
})