const axios = require('axios');

// URL del endpoint de autenticación
const authEndpoint = 'localhost:3000/auth';

// Datos de usuario para enviar en la petición POST
const userData = {
  username: 'nombre_de_usuario',
  password: 'contraseña_secreta'
};

// Función para realizar la petición POST y manejar la respuesta
async function login() {
  try {
    const response = await axios.post(authEndpoint, userData);
    const token = response.data.token; // Suponiendo que el token se devuelve en la respuesta como una propiedad "token"
    
    // Aquí puedes almacenar el token como necesites, por ejemplo en una variable global o en el almacenamiento local (como localStorage en el navegador o AsyncStorage en React Native)
    console.log('Token de autenticación:', token);

    // Puedes realizar otras acciones después de obtener el token, como redirigir al usuario a otra página o realizar más solicitudes que requieran autenticación
  } catch (error) {
    console.error('Error al autenticar:', error.response ? error.response.data : error.message);
    // Maneja el error de autenticación, por ejemplo, mostrando un mensaje al usuario
  }
}

// Llama a la función de inicio de sesión para ejecutar el proceso
login();
