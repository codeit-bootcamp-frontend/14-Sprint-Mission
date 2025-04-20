import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

function Container({ className, children }) {
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 페이지 로딩 완료 후 50ms 후 페이드인 시작
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={clsx(`page ${loaded ? 'fade-in' : ''}`,
      'w-full min-w-[--min-width]  max-w-[--max-width] mx-auto tablet:px-[--padding-24] mobile:px-[--padding-16]',
      className
    )}>{children}</div>
  );
}

export default Container;
