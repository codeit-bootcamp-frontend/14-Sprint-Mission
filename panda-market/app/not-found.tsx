'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.push('/boards');
  }, [router]);
  return <></>;
}

export default NotFound;
