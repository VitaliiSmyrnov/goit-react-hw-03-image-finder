import axios from 'axios';

const API_KEY = '31422890-5e40c603f0e6080de62657891';
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const response = await axios.get('/', {
    params: {
      q: query,
      page,
    },
  });

  return response.data;
};
