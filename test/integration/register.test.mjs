const axios = require('axios');

describe('Registro de usuario', () => {
  test('Debe registrar un nuevo usuario correctamente', async () => {
    const userData = {
      username: 'testuser',
      password: 'testpassword'
    };

    const response = await axios.post('http://tu-api.com/register', userData);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message', 'Usuario registrado exitosamente');
  });
});
