import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={twMerge(`flex flex-col items-center px-4 lg:px-20 xl:px-24 ${inter.className}`, className)}
    >
      {children}
    </section>
  );
};

export default Container;
