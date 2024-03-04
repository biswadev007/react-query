import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Header from '@/components/Header';

// gcTime is garbage collection time, if any of API's node is not active or not used for time then it will refetch the data
const queryClient = new QueryClient({
  defaultOptions: { queries: { gcTime: 10 * (60 * 1000), staleTime: 60000 } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
