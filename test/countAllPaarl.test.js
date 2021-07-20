let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe('The countAllPaarl function' , function(){
    it('When given "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123" , output should be 3' , function(){
        assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), 3);
    });
    it('When given "CJ 345 123, CL 123-546, CK 345, CJ 123" , output should be 2' , function(){
        assert.equal(countAllPaarl("CJ 345 123, CL 123-546, CK 345, CJ 123"), 2);
    });
    it('When given 12 , output should be "Please enter a string"' , function(){
        assert.equal(countAllPaarl(12), "Please enter a string");
    });

});