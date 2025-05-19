
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logoImg1, logoImg2 } from '@/lib/imageAssets';


function MembersLogo() {
  return (
    <div>
      <Link href="/" className='flex items-center justify-center mb-10 gap-6'>
        <span className='relative inline-flex h-[84px] mobile:hidden'>
          <Image src={logoImg1} width={110} height={110} unoptimized className="w-full h-auto" priority alt="로고이미지" />
        </span>
        <span className='relative inline-flex h-[60px]'>
          <Image src={logoImg2} width={266} height={90}  unoptimized className="w-full h-auto" priority alt="판다마켓" />
        </span>
      </Link>
    </div>
  );
}

export default MembersLogo;
