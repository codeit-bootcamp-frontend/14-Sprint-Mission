import React from 'react';
import Image from 'next/image';
import { eyeClose, eyeOpen } from '@/lib/imageAssets';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  error: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  withEyeToggle?: boolean;
  eyeState?: boolean;
  onEyeToggle?: () => void;
  eyeIconOpen?: string;
  eyeIconClose?: string;
}

export default function FormField({
  id,
  label,
  type,
  placeholder,
  error,
  onBlur,
  withEyeToggle = false,
  eyeState = true,
  onEyeToggle,
  eyeIconOpen = eyeOpen,
  eyeIconClose = eyeClose,
}: FormFieldProps) {
  return (
    <label htmlFor={id} className="relative">
      {label}
      <div>
        <input
          id={id}
          type={type}
          className={error && 'outline outline-1 outline-red-500'}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {withEyeToggle && onEyeToggle && (
          <button
            type="button"
            onClick={onEyeToggle}
            className="absolute bottom-4 right-6"
            aria-label="비밀번호 표시 전환"
          >
            <Image
              src={eyeState ? eyeIconOpen : eyeIconClose}
              width={24}
              height={24}
              alt="toggle password"
            />
          </button>
        )}
      </div>
      {error && <span className="absolute top-3 right-3 text-error_red-50 text-base font-normal">{error}</span>}
    </label>
  );
}
