import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // Reemplaza con la URL real de la API

// Crear una nueva tienda
export const createNewStore = async (name, token) => {
  try {
    const response = await axios.post(`${API_URL}/store/${name}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creando tienda:', error);
    throw error;
  }
};

// Obtener una tienda por su nombre
export const getStoreByName = async (name, token) => {
  try {
    const response = await axios.get(`${API_URL}/store/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo tienda:', error);
    throw error;
  }
};

// Eliminar una tienda por su nombre
export const deleteStoreByName = async (name, token) => {
  try {
    const response = await axios.delete(`${API_URL}/store/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error eliminando tienda:', error);
    throw error;
  }
};

// Obtener todas las tiendas
export const getAllStores = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/stores`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo todas las tiendas:', error);
    throw error;
  }
};
