let assert = require('assert');
let findItemsOver = require('../findItemsOver');

describe('The findItemsOver function' , function(){
    it('When given [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}] and 5 output should be [{"name":"pears","qty":37}' , function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 30), [{"name":"pears","qty":37}]);
    });
    it('When given 12 and 5 output should be "Please enter valid values"' , function(){
        assert.deepEqual(findItemsOver(12, 5), "Please enter valid values");
    });
    it('When given 12 and "jeff" output should be "Please enter valid values"' , function(){
        assert.deepEqual(findItemsOver(12, "jeff"), "Please enter valid values");
    });

});