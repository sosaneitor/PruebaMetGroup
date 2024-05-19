import axios from 'axios';

const API_URL = 'localhost:3000'; // Reemplaza con la URL real de la API

// Crear un nuevo artículo
export const createNewItem = async (name, itemData, token) => {
  try {
    const response = await axios.post(`${API_URL}/item/${name}`, itemData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creando artículo:', error);
    throw error;
  }
};

// Obtener un artículo por su nombre
export const getItemByName = async (name, token) => {
  try {
    const response = await axios.get(`${API_URL}/item/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo artículo:', error);
    throw error;
  }
};

// Actualizar un artículo por su nombre
export const updateItemByName = async (name, itemData, token) => {
  try {
    const response = await axios.put(`${API_URL}/item/${name}`, itemData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error actualizando artículo:', error);
    throw error;
  }
};

// Eliminar un artículo por su nombre
export const deleteItemByName = async (name, token) => {
  try {
    const response = await axios.delete(`${API_URL}/item/${name}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error eliminando artículo:', error);
    throw error;
  }
};

// Obtener todos los artículos
export const getAllItems = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/items`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo todos los artículos:', error);
    throw error;
  }
};
