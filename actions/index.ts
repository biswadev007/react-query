import axios from 'axios';

const fetchAllProducts = async(page: number = 1) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products?limit=5&page=${page}`);
  return data;
};

const fetchProductsByCategory = async(category: string) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return data;
};

const addProduct = async() => {
  const { data } = await axios.post('https://fakestoreapi.com/products', {
    title: 'Macbook Air',
    price: 10.4,
    description: 'If you send an object like the code above, it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error',
    image: 'https://fastly.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY',
    category: 'electronic',
  });
  return data;
};

export { fetchAllProducts, fetchProductsByCategory, addProduct };
