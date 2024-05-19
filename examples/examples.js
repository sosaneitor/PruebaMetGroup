import {
    registerUser,
    loginUser,
    createStore,
    getStore,
    deleteStore,
    getAllStores,
    createItem,
    getItem,
    updateItem,
    deleteItem,
    getAllItems
  } from './apiClient.mjs';
  
  const runExamples = async () => {
    try {
      // 1. Registrar un nuevo usuario
      const newUser = { username: 'testuser', password: 'testpass' };
      const registerResponse = await registerUser(newUser);
      console.log('Register Response:', registerResponse);
  
      // 2. Loguear usuario
      const loginResponse = await loginUser(newUser);
      console.log('Login Response:', loginResponse);
  
      const token = loginResponse.token;
  
      // 3. Crear una nueva tienda
      const storeName = 'teststore';
      const createStoreResponse = await createStore(storeName, token);
      console.log('Create Store Response:', createStoreResponse);
  
      // 4. Consultar una tienda
      const getStoreResponse = await getStore(storeName, token);
      console.log('Get Store Response:', getStoreResponse);
  
      // 5. Ver todas las tiendas
      const allStoresResponse = await getAllStores(token);
      console.log('All Stores Response:', allStoresResponse);
  
      // 6. Crear un nuevo artículo
      const itemName = 'testitem';
      const itemData = { name: itemName, price: 10 };
      const createItemResponse = await createItem(itemName, itemData, token);
      console.log('Create Item Response:', createItemResponse);
  
      // 7. Consultar un artículo
      const getItemResponse = await getItem(itemName, token);
      console.log('Get Item Response:', getItemResponse);
  
      // 8. Actualizar un artículo
      const updatedItemData = { name: itemName, price: 15 };
      const updateItemResponse = await updateItem(itemName, updatedItemData, token);
      console.log('Update Item Response:', updateItemResponse);
  
      // 9. Ver todos los artículos
      const allItemsResponse = await getAllItems(token);
      console.log('All Items Response:', allItemsResponse);
  
      // 10. Eliminar un artículo
      const deleteItemResponse = await deleteItem(itemName, token);
      console.log('Delete Item Response:', deleteItemResponse);
  
      // 11. Eliminar una tienda
      const deleteStoreResponse = await deleteStore(storeName, token);
      console.log('Delete Store Response:', deleteStoreResponse);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  runExamples();
  