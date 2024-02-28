import axios from "axios";

const fetchAllProducts = () => {
  return axios.get('https://fakestoreapi.com/products');
};

const fetchProductsByCategory = (category: string) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`)
};

export {
  fetchAllProducts,
  fetchProductsByCategory
}