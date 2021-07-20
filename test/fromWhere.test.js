let assert = require('assert');
let fromWhere = require('../fromWhere');

describe('The fromWhere function' , function(){
    it('When given "CJ", output should be Paarl' , function(){
        assert.equal(fromWhere("CJ"), "Paarl");
    });
    it('When given "CY", output should be Bellville' , function(){
        assert.equal(fromWhere("CY"), "Bellville");
    });
    it('When given 12, output should be "Please enter a valid string"' , function(){
        assert.equal(fromWhere(12), "Please enter a valid string");
    });

});