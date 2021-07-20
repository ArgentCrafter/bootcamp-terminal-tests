let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe('The yearsAgo function' , function(){
    it('When given 1976, output should be 45' , function(){
        assert.equal(yearsAgo(1976), 45);
    });
    it('When given 2000, output should be 21' , function(){
        assert.equal(yearsAgo(2000), 21);
    });
    it('When given "Jeff", output should be "Not a valid year"' , function(){
        assert.equal(yearsAgo("Jeff"), "Not a valid year");
    });

});