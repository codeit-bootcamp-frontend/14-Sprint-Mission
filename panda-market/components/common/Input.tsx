import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  image?: string;
  alt?: string;
  label?: string;
}

function Input({ ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-12">
      {props.label && <h2 className="font-700 text-18">*{props.label}</h2>}
      {props.image && (
        <Image
          className="absolute left-[20px] top-[13px]"
          src={props.image}
          alt={props.alt || ''}
        />
      )}
      <input
        className={`w-full bg-gray-100 py-[9px] rounded-xl outline-none ${
          props.image ? ' pl-[44px]' : ' pl-[24px]'
        }`}
        {...props}
      />
    </div>
  );
}

export default Input;
