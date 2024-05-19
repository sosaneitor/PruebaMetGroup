import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index.mjs';
import { MyArray } from '../EjerciciosLogicos/myArray.mjs';

const should = chai.should();
chai.use(chaiHttp);

describe('API', () => {
  it('should GET the home route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql('API is working');
        done();
      });
  });

  it('should POST to /evaluate and return correct responses', (done) => {
    const expression = '2 + 3 * (4 - 1)';
    chai.request(app)
      .post('/evaluate')
      .send({ expression })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('operation').eql(true);
        res.body.should.have.property('compute').eql(11);
        done();
      });
  });
});

describe('MyArray Class', () => {
  it('should determine if the string is a valid operation', () => {
    const validExpression = new MyArray('2 + 3 * (4 - 1)');
    const invalidExpression = new MyArray('2 + 3 * (4 - 1');
    validExpression.operation().should.equal(true);
    invalidExpression.operation().should.equal(false);
  });

  it('should compute the value of a valid arithmetic expression', () => {
    const myArray = new MyArray('2 + 3 * (4 - 1)');
    myArray.compute().should.equal(11);
  });

  it('should return false for an invalid arithmetic expression', () => {
    const myArray = new MyArray('2 + 3 * (4 - 1');
    myArray.compute().should.equal(false);
  });
});
