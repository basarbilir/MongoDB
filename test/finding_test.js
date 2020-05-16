const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){

  var char;

  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Basar'
    });
    char.save().then(function(){
      done();
    })
  });

  // Create tests
  it('Finds a record from the database', function(done){
    MarioChar.findOne({name: 'Basar'}).then(function(result){
      assert(result.name === 'Basar');
      done();
    });

  });

  it('Finds a record by unique id', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });

});