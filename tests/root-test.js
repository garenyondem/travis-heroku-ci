const supertest = require('supertest');
const should = require('should');

describe('root.test', function () {
    this.timeout(10000);
    let app;
    beforeEach(() => {
        app = require('../index');
    });
    afterEach(() => {
        app.close();
    });

    it('Should get hello world response', (done) => {
        supertest(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                res.body.should.be.object;
                res.body.should.have.property('message');
                res.body.message.should.be.string;
                res.body.message.should.be.equal('Hello World!');
            })
            .end(done);
    });
});