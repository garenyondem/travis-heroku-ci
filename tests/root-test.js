const should = require('should');

describe('root.test', function () {
    this.timeout(10000);

    it('Should get hello world response', () => {
        var a = 'Hello World';
        a.should.equal('Hello World');
    });
});