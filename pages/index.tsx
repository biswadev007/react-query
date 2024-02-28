import { useQuery } from 'react-query';

import Container from '@/components/Container';
import { fetchAllProducts } from '../actions/index';
import ProductCard from '@/components/ProductCard';

import { Product } from '../types';

export default function Home() {
  const { data, error, isFetching, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  if (isFetching) return <span>Loading...</span>;

  if (isError) {
    console.log('Error: ', error);
  }

  return (
    <Container className='mt-28'>
      <div className='flex flex-wrap gap-y-12 gap-x-8 justify-center'>
        {data?.data.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Container>
  );
}
