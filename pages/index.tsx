import { useQuery } from '@tanstack/react-query';

import Container from '@/components/Container';
import { fetchAllProducts } from '../actions/index';
import ProductCard from '@/components/ProductCard';

import { Product } from '../types';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);

  const { data, error, isFetching, isError } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchAllProducts(page),
    // If users didn't update the page for while or comeback from other tab then after this time this API will call aging to revalidate data
    // staleTime: 60000,

    // Refetch the data after this time period
    // refetchInterval: 4000

    // Stop fetching the API on window focus although the staleTime is enable
    refetchOnWindowFocus: false,

    // If API failed then it will retry 4 time or n times.
    retry: 4,
  });

  if (isFetching) return <span>Loading...</span>;

  if (isError) {
    console.log('Error: ', error);
  }

  return (
    <Container className='mt-28'>
      <div className='flex flex-wrap gap-y-12 gap-x-8 justify-center'>
        {data?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className='flex gap-4 items-center mt-6'>
        {new Array(5).fill(null).map((_, idx) => (
          <button className='border border-black px-2' onClick={() => setPage(idx + 1)}>
            {idx+1}
          </button>
        ))}
      </div>
    </Container>
  );
}
