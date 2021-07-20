let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20');

describe('The findItemsOver20 function' , function(){
    it('When given [{"name":"pears","qty":37}], output should be [{"name":"pears","qty":37}]' , function(){
        assert.deepEqual(findItemsOver20([{"name":"pears","qty":37}]), [{"name":"pears","qty":37}]);
    });
    it('When given [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}] output should be [{"name":"pears","qty":37}]' , function(){
        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"pears","qty":37}, {"name":"bananas","qty":27}]);
    });
    it('When given 12 output should be "Please enter a valid list"' , function(){
        assert.deepEqual(findItemsOver20(12), "Please enter a valid list");
    });

});