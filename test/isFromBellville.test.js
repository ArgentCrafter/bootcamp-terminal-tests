let assert = require('assert');
let isFromBellville = require('../isFromBellville');

describe('The isFromBellville function' , function(){
    it('When given "CY", output should be true' , function(){
        assert.equal(isFromBellville('CY'),true);
    });
    it('When given "CK", output should be false' , function(){
        assert.equal(isFromBellville('CK'),false);
    });
    it('When given "CL", output should be false' , function(){
        assert.equal(isFromBellville('CL'),false);
    });
});