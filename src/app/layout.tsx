
'use client';

import './global.css';
import { ReactNode, useEffect, useRef } from 'react';
import QueryProvider from '@/components/layout/providers/query-provider';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import ProductNav from '@/components/layout/ProductNav';


export default function RootLayout({ children }: { children: ReactNode }) {
  
  const segments = useSelectedLayoutSegments(); // ex: ['login']
  const isAuthPage = segments[0] === 'login' || segments[0] === 'signup';
  const isItemsPage = segments[0] === 'items' || segments[0] === 'boards';

  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    if ( pathname !== '/login' && pathname !== prevPathnameRef.current) {
      sessionStorage.setItem('redirectPath', pathname);
      prevPathnameRef.current = pathname; 
    }
  }, [pathname]);


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
      <div id="modal-root"></div>
      </QueryProvider>
      </body>
    </html>
  );
}

