import Image from 'next/image';
import Link from 'next/link';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonLargeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc?: string;
  imgAlt?: string;
  to: string;
}

function ButtonLarge({
  children,
  imgSrc,
  imgAlt,
  to,
  ...rest
}: PropsWithChildren<ButtonLargeProps>) {
  return (
    <Link href={to}>
      <button
        className="flex justify-center items-center w-240 h-48 gap-8 rounded-[40px] bg-blue text-white"
        {...rest}
      >
        {children}
        {imgSrc && (
          <Image
            className="w-24 h-24"
            src={imgSrc}
            alt={imgAlt ?? ''}
            width={24}
            height={24}
          />
        )}
      </button>
    </Link>
  );
}

export default ButtonLarge;
