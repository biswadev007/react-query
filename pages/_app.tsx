import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Header from '@/components/Header';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
