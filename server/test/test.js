const app = require('../index');
const chai = require('chai');
const supertest = require('supertest');

const expect = chai.expect;

let strObj = { strValue: "this is an automatic test" };

describe('Send String API test', function () {
  describe('#POST /api/sendString', function () {
    it('should return the same string it receives', function (done) {
      supertest(app).post('/api/sendString')
        .send(strObj)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.status).to.equal(200);
          expect(res.body.data).to.be.equal(strObj.strValue);
          done();
        });
    });
  });
});