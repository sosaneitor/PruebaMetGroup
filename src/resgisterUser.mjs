import axios from 'axios';

const API_URL = 'localhost:3000'; // Reemplaza con la URL real de la API

/**
 * Register a new user
 * @param {Object} userData - The user data (e.g., { username: 'testuser', password: 'testpass' })
 * @returns {Promise<Object>} - The response data from the API
 */
const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log('User registered successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Example usage
const exampleUsage = async () => {
  const userData = {
    username: 'testuser',
    password: 'testpass'
  };

  try {
    const registerResponse = await registerUser(userData);
    console.log('Register Response:', registerResponse);
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message);
  }
};

exampleUsage();
