import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  imageSrc: string;
  alt: string;
}

function Input({ imageSrc, alt, placeholder, onChange }: InputProps) {
  return (
    <div>
      {imageSrc && (
        <Image
          className="absolute left-[20px] top-[13px]"
          src={imageSrc}
          alt={alt}
        />
      )}
      <input
        className="w-full bg-gray-100 py-[9px] pl-[44px] rounded-xl outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
