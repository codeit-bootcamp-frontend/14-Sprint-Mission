import './Navbar.css';
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/user.png';
import { Link, NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
import authService from '../../api/services/auth.services';
import Dropdown from './Dropdown';

function getLinkStyle({ isActive }: { isActive: boolean }) {
  return {
    color: isActive ? '#3692FF' : '#000',
  };
}

function Navbar() {
  const isLoggedIn = localStorage.getItem('access_token');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = [{ label: '로그아웃', onClick: () => handleLogout() }];
  const dropdownButton = 'dropdown-button';

  // dropdown 열기/닫기
  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  // 로그아웃
  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <nav>
      <div className="header">
        <div className="header-links">
          <Link className="brand-name" to="/">
            <img className="logo" src={logo} alt="logo" />
            판다마켓
          </Link>
          {isLoggedIn && (
            <ul className="link-list">
              <li>
                <NavLink to={`/community`} style={getLinkStyle}>
                  자유게시판
                </NavLink>
              </li>
              <li>
                <NavLink to={`/items`} style={getLinkStyle}>
                  중고마켓
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {isLoggedIn ? (
          <div className="profile">
            <img
              id={dropdownButton} // 고유 ID 적용
              src={userIcon}
              alt="user icon"
              width={40}
              onClick={handleProfileClick}
              style={{ cursor: 'pointer' }}
            />
            <Dropdown
              items={dropdownItems}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              triggerElementId={dropdownButton} // 트리거 요소 ID 전달
            />
          </div>
        ) : (
          <Link className="login-button" to="/login">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
