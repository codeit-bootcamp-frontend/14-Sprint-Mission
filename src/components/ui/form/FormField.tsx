import React from 'react';
import Image from 'next/image';
import { eyeClose, eyeOpen } from '@/lib/imageAssets';
import Icon from '../Icon';
import clsx from 'clsx';

type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  error?: string;
  withEyeToggle?: boolean;
  eyeState?: boolean;
  onEyeToggle?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FormField({
  id,
  label,
  error,
  withEyeToggle,
  eyeState,
  onEyeToggle,
  ...inputProps
}: FormFieldProps) {

  
  return (
    <div className="relative mb-6">
      <label className="text-lg font-bold mobile:text-sm" htmlFor={id}>{label}</label>
      <div className='mt-4'>
        <input id={id}  className={clsx("bg-secondary-100 h-[56px] rounded-xl w-full px-6",error && 'outline outline-1 outline-red-500')} {...inputProps}/>
        {withEyeToggle && (
          <button type="button" onClick={onEyeToggle}
            className="absolute bottom-4 right-6"
            aria-label="비밀번호 표시 전환"
          >
            <Icon
              iconName={eyeState ? 'eyeOpen' : 'eyeClose'}
              alt="toggle password"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {error && <span className="absolute top-3 right-3 text-error_red-50 text-base font-normal">{error}</span>}
    </div>
  );
}
