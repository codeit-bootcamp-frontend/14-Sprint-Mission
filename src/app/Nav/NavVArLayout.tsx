import { Outlet, useLocation } from 'react-router-dom'
import ItemsNavVar from '../common/ItemsNavVar'

const NavVArLayout = () => {
  const { pathname } = useLocation() // 현재 페이지가 어떤 페이지인지 감지

  const isItemsPage = pathname === '/additem' || pathname.startsWith('/items')
  const isBoardsPage = pathname === '/boards'

  return (
    <>
      <ItemsNavVar isItemsPage={isItemsPage} isBoardsPage={isBoardsPage} />
      <Outlet />
      {/*Outlet을 통해 하위 라우트  렌더링함. App 컴포넌트에서 확인 가능 */}
    </>
  )
}

export default NavVArLayout
