'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import searchIcon from '@/public/assets/icons/search-icon.svg';
import { redirect, useSearchParams } from 'next/navigation';
import Input from './Input';

export default function SearchForm() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const orderBy = searchParams.get('orderBy') || '';
  const [value, setValue] = useState(keyword);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!value) {
      redirect('/');
    }
    redirect(`/boards?orderby=${orderBy}&keyword=${value}`);
  };

  return (
    <form className="relative flex-1" onSubmit={handleSubmit}>
      <Input
        imageSrc={searchIcon}
        alt="seach"
        placeholder="검색할 상품을 입력해주세요."
        onChange={handleChange}
      />
    </form>
  );
}
