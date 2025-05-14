'use client';

import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: ContainerProps) {
  
  
  return (
      <section className={clsx(`page`,
        'w-full min-w-base  max-w-container mx-auto tablet:px-6 mobile:px-4',
        className
      )}>
        {children}
      </section>
  );
}

export default Container;
