import './Navbar.css';
import logo from '@/public/logo.png';
import userIcon from '@/assets/images/user.png';
import Link from 'next/link';
import Image from 'next/image';

function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav>
      <div className="header">
        <div className="header-links">
          <Link className="brand-name" href="/">
            <Image
              className="logo"
              src={logo}
              alt="logo"
              width={40}
              height={40}
            />
            판다마켓
          </Link>
          {isLoggedIn && (
            <ul className="link-list">
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
          <Link className="login-button" href="/login">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
