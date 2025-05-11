'use client';

import './global.css';
import { ReactNode } from 'react';
import QueryProvider from '@/components/layout/providers/query-provider';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { useSelectedLayoutSegments } from 'next/navigation';
import ProductNav from '@/components/layout/ProductNav';


export default function RootLayout({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments(); // ex: ['login']
  const isAuthPage = segments[0] === 'login' || segments[0] === 'signup';
  const isItemsPage = segments[0] === 'items' || segments[0] === 'boards';

  return (
    <html lang="ko">
      <body>
        <QueryProvider>
            {!isAuthPage ?  
              !isItemsPage ? 
              <Nav /> :
              <ProductNav />
              : null
            } 
          <div className='min-h-[calc(100vh-234px)]'>
            {children}
          </div>
          {!isAuthPage && <Footer />}
        </QueryProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
