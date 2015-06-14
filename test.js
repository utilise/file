var expect = require('chai').expect
  , client = require('client')
  , file = require('./')
  
if (client) return

describe('file', function() {

  it('should read file', function(){
    expect(file('.gitignore').split('*').pop()).to.eql('.log')
  })
  
})