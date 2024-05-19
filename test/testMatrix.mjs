import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index.mjs';
import { MyMatrix } from '../EjerciciosLogicos/myMatrix.mjs';


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

  it('should POST to /matrix and return correct responses', (done) => {
    const matrix = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    chai.request(app)
      .post('/matrix')
      .send({ matrix })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('dimension').eql(3);
        res.body.should.have.property('straight').eql(true);
        res.body.should.have.property('compute').eql(36);
        done();
      });
  });
});

describe('MyMatrix Class', () => {
  it('should calculate dimension correctly', () => {
    const myMatrix = new MyMatrix([1, 2, [3, 4]]);
    myMatrix.dimension().should.equal(2);
  });

  it('should determine if the matrix is straight', () => {
    const myMatrix1 = new MyMatrix([[1, 2], [3, 4]]);
    const myMatrix2 = new MyMatrix([[1, 2], [3, 4, 5]]);
    myMatrix1.straight().should.equal(true);
    myMatrix2.straight().should.equal(false);
  });

  it('should compute the sum of all elements', () => {
    const myMatrix = new MyMatrix([1, [2, [3, 4]], 5]);
    myMatrix.compute().should.equal(15);
  });
});
