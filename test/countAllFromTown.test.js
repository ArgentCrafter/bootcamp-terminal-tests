let assert = require('assert');
let countAllFromTown = require('../countAllFromTown');

describe('The countAllFromTown function' , function(){
    it('When given "CL 124,CY 567,CL 345, CJ 456,CL 341" and "CL", output should be 3' , function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"), 3);
    });
    it('When given "CL 124,CY 567,CL 345, CJ 456,CL 341" and "CY", output should be 1' , function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CY"), 1);
    });
    it('When given 12 and "CL", output should be "Please enter a string"' , function(){
        assert.equal(countAllFromTown(12, "CL"), "Please enter a string");
    });
    it('When given "CL 124,CY 567,CL 345, CJ 456,CL 341" and 12, output should be "Please enter a string"' , function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", 12), "Please enter a string");
    });

});