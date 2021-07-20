let assert = require('assert');
let regCheck = require('../regCheck');

describe('The regCheck function' , function(){
    it('When given "DV 23 NB GP" and "GP", output should be true' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
    it('When given "DV 23 NB GP" and "CY", output should be false' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'CY'),false);
    });
    it('When given "DV 23 NB CK" and "GP", output should be false' , function(){
        assert.equal(regCheck('DV 23 NB CK', 'GP'),false);
    });

});