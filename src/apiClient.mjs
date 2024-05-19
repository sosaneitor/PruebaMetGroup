import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // Reemplaza con la URL real de la API

// Crear un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Loguear usuario
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Crear una nueva tienda
export const createStore = async (name, token) => {
  try {
    const response = await axios.post(`${API_URL}/store/${name}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating store:', error);
    throw error;
  }
};

// Consultar una tienda
export const getStore = async (name, token) => {
  try {
    const response = await axios.get(`${API_URL}/store/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting store:', error);
    throw error;
  }
};

// Eliminar una tienda
export const deleteStore = async (name, token) => {
  try {
    const response = await axios.delete(`${API_URL}/store/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting store:', error);
    throw error;
  }
};

// Ver todas las tiendas
export const getAllStores = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/stores`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting all stores:', error);
    throw error;
  }
};

// Crear un nuevo artículo
export const createItem = async (name, itemData, token) => {
  try {
    const response = await axios.post(`${API_URL}/item/${name}`, itemData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Consultar un artículo
export const getItem = async (name, token) => {
  try {
    const response = await axios.get(`${API_URL}/item/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting item:', error);
    throw error;
  }
};

// Actualizar un artículo
export const updateItem = async (name, itemData, token) => {
  try {
    const response = await axios.put(`${API_URL}/item/${name}`, itemData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Eliminar un artículo
export const deleteItem = async (name, token) => {
  try {
    const response = await axios.delete(`${API_URL}/item/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

// Ver todos los artículos
export const getAllItems = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/items`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting all items:', error);
    throw error;
  }
};
