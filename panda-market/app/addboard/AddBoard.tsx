'use client';
import { User } from '@/api/auth';
import withAuth from '../../components/auth/withAuth';
import Navbar from '@/components/common/Navbar';
import ButtonSmall from '@/components/common/ButtonSmall';
import { useEffect, useState } from 'react';
import Input from '@/components/common/Input';

interface Props {
  user?: User;
}

function AddBoard({ user }: Props) {
  console.log(user);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {}, []);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="max-w-[1200px] mx-auto my-0 max-[1200px]:mx-[24px]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[20px] my-[24px]">게시글 쓰기</h2>
          <ButtonSmall disabled={true}>등록</ButtonSmall>
        </div>
        <div className="flex flex-col">
          <Input />
        </div>
      </div>
    </>
  );
}

export default withAuth(AddBoard);
