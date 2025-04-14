import logo from '@/public/assets/images/logo.png';
import userIcon from '@/public/assets/icons/user-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav>
      <div className="flex items-center justify-between h-[70px] px-[200px] py-0 border-b border-[#dfdfdf] max-[1200px]:px-[24px] max-[767px]:px-[16px]">
        <div className="flex items-center gap-8">
          <Link className="flex items-center font-rokaf gap-[8px]" href="/">
            <Image className="h-auto" src={logo} alt="logo" width={40} />
            <div className="text-[26px] font-[700] text-blue">판다마켓</div>
          </Link>
          {isLoggedIn && (
            <ul className="flex list-none gap-[30px] font-[700] font-pretendard text-gray-600">
              <li>
                <Link href={`/community`}>자유게시판</Link>
              </li>
              <li>
                <Link href={`/items`}>중고마켓</Link>
              </li>
            </ul>
          )}
        </div>

        {isLoggedIn ? (
          <Image src={userIcon} alt="user icon" width={40} />
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
