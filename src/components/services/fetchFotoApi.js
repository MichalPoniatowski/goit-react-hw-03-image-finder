import axios from 'axios';

const KEY = '36285861-168bae95e05873f7547dc914e';
const API_URL = 'https://pixabay.com/api/?';
let perPage = 40;

export const fetchFotos = async (searchQuery, page) => {
  const response = await axios.get(API_URL, {
    params: {
      key: KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });
  console.log('fetchfotos');
  console.log(response);
  return response.data;
};
