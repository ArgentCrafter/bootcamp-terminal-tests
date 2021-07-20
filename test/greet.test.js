let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});