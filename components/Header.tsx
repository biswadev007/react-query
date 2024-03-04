import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dosis } from 'next/font/google';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Container from './Container';
import { addProduct } from '@/actions';

const dosis = Dosis({ subsets: ['latin'] });

const Header = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['addProduct'],
    mutationFn: addProduct,
    onSuccess: (newProduct) => {
      // Refetch the data after adding...
      queryClient.invalidateQueries({ queryKey: ['products'] });

      // Manually adding add to particular cache
      // queryClient.setQueryData(['products'], (oldProducts: any) => [
      //   ...oldProducts,
      //   newProduct,
      // ]);
    },
  });

  return (
    <Container className='py-6 fixed w-full top-0 bg-white z-50 shadow-md'>
      <header className='h-12 w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex-1 2xl:flex-[2]'>
            <div className='w-14 h-14'>
              <Link href={'/'}>
                <div className='flex gap-1 items-center'>
                  <Image
                    src='/images/store.png'
                    width={40}
                    height={40}
                    alt='store'
                  />
                  <h1 className={`text-3xl font-bold  ${dosis.className}`}>
                    Shopaey
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div className='hidden lg:flex flex-1 items-center justify-between'>
            <ul className='flex gap-2 items-center justify-between'>
              <li className='hover:text-orange-600'>
                <Link href={'/'}>Home</Link>
              </li>
              <li className='hover:text-orange-600'>
                <Link href={'/category/electronics'}>Electronics</Link>
              </li>
              <li className='hover:text-orange-600'>
                <Link href={'/category/jewelery'}>Jewelery</Link>
              </li>
              <li className='hover:text-orange-600'>
                <Link href={`/category/men's clothing`}>Men's clothing</Link>
              </li>
              <li className='hover:text-orange-600'>
                <Link href={`/category/women's clothing`}>
                  Women's clothing
                </Link>
              </li>
            </ul>
            <button
              onClick={() => mutate()}
              className='h-10 w-40 border border-neutral-500 hover:bg-black hover:text-white'
            >
              {'Add product'}
            </button>
          </div>

          <div className='w-14 h-14 rounded-full shadow-lg flex justify-center items-center cursor-pointer lg:hidden'>
            <Image
              src={'/images/hamburger.png'}
              width={30}
              height={30}
              alt='hamburger'
            />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default memo(Header);
