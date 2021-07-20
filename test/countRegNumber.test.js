let assert = require('assert');
let countRegNumber = require('../countRegNumber');

describe('The countRegNumber function' , function(){
    it('When given "CA 182736,CY 523519,CJ 812328", output should be 3' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });
    it('When given "CA 182736,CY 523519", output should be 2' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'),2);
    });
    it('When given "CA 182736", output should be 1' , function(){
        assert.equal(countRegNumber('CA 182736'),1);
    });

});