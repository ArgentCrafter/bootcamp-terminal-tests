let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');

describe('The totalPhoneBill function' , function(){
    it('When given "call, sms, call, sms, sms", output should be "R7.45"' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });
    it('When given "call, sms", output should be "R3.40"' , function(){
        assert.equal(totalPhoneBill("call, sms"), "R3.40");
    });
    it('When given "jeff", output should be "Please enter a valid string"' , function(){
        assert.equal(totalPhoneBill("jeff"), "Please enter a valid string");
    });
    it('When given 12, output should be "Please enter a valid string"' , function(){
        assert.equal(totalPhoneBill(12), "Please enter a valid string");
    });

});