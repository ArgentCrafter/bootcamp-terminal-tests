let assert = require('assert');
let transportFee = require('../transportFee');

describe('The transportFee function' , function(){
    it('When given "morning", output should be R20' , function(){
        assert.equal(transportFee("morning"), "R20");
    });
    it('When given "afternoon", output should be R10' , function(){
        assert.equal(transportFee("afternoon"), "R10");
    });
    it('When given "Jeff", output should be "Please enter a valid shift"' , function(){
        assert.equal(transportFee("Jeff"), "Please enter a valid shift");
    });
    it('When given 12, output should be "Please enter a valid shift"' , function(){
        assert.equal(transportFee(12), "Please enter a valid shift");
    });

});