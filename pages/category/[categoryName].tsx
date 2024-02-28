import { useParams } from 'next/navigation';
import { useQuery, QueryClient } from 'react-query';

import Container from '@/components/Container';
import { fetchProductsByCategory } from '../../actions/index';
import ProductCard from '@/components/ProductCard';

import { Product } from '../../types';

const queryClient = new QueryClient();

const Category = () => {
  const params = useParams();

  const { data, error, isFetching, isError } = useQuery({
    queryKey: ['category', params?.categoryName as string],
    queryFn: () => fetchProductsByCategory(params?.categoryName as string),
    staleTime: 10000,
    cacheTime: 10000,
    initialData: ()=> {
      return queryClient.getQueryData(['category', params?.categoryName as string])
    }
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
};

export default Category;
