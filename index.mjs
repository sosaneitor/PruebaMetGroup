import express from 'express';
import { MyMatrix } from './EjerciciosLogicos/myMatrix.mjs';
import { MyArray } from './EjerciciosLogicos/myArray.mjs';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working');
});

// Example route to demonstrate MyMatrix
app.post('/matrix', (req, res) => {
  const { matrix } = req.body;
  const myMatrix = new MyMatrix(matrix);

  res.json({
    dimension: myMatrix.dimension(),
    straight: myMatrix.straight(),
    compute: myMatrix.compute()
  });
});

// Example route to demonstrate MyArray
app.post('/evaluate', (req, res) => {
    const { expression } = req.body;
    const myArray = new MyArray(expression);
  
    res.json({
      operation: myArray.operation(),
      compute: myArray.compute()
    });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app };
