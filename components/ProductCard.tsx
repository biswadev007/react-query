import Image from 'next/image';

import { Product } from '@/types';

const ProductCard: React.FC<Product> = ({
  description,
  id,
  image,
  rating,
  title,
  price
}) => {
  return (
    <div className='w-auto min-w-20 h-[400px] rounded-lg shadow-2xl flex flex-col max-w-60 overflow-hidden pt-6'>
      <div className='relative w-52 h-52 mx-auto'>
        <Image src={image} alt='product' fill className='object-cover' />
      </div>
      <div className='p-2'>
        <h5 className='truncate text-lg font-semibold mb-2'>{title}</h5>
        <div className='line-clamp-2'>{description}</div>
        <div className='flex justify-between mt-4 items-center'>
          <div className='flex items-baseline'>
            <div className='text-sm'>RS</div>
            <div className='text-2xl font-semibold'>&nbsp;{price}</div>
          </div>
          <button className='w-10 h-10 rounded-full bg-orange-600 flex justify-center items-center shadow-lg'>
            <Image src={'/images/next.png'} alt='next' width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
