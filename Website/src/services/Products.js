import axios from '../api/axios'; 

export const fetchItems = async (category) => {
  const res = await axios.get('/items', {
    params: { category }
  });
  return res.data;
};


export const getImageUrl = (imageFileId) => {
  if (!imageFileId) return '/no-image.png';

  // Extract baseURL from your custom axios instance
  const baseURL = axios.defaults.baseURL || '';

  return `${baseURL}/items/image/file/${imageFileId}`;
};