let assert = require('assert');
let isWeekday = require('../isWeekday');

describe('The isWeekday function' , function(){
    it('When given "Sunday", output should equal false' , function(){
        assert.equal(isWeekday("Sunday"), false);
    });
    it('When given "Monday", output should equal true' , function(){
        assert.equal(isWeekday("Monday"), true);
    });
    it('When given "left", output should equal "Not a valid day"' , function(){
        assert.equal(isWeekday("left"), "Not a valid day");
    });

});