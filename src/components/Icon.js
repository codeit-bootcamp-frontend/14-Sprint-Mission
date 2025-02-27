import eyeOpen from '../assets/eye_1.svg';
import eyeClose from '../assets/eye_2.svg';
import heartOpen from '../assets/heart_1.svg';
import heartClose from '../assets/heart_2.svg';
import arrowDown from '../assets/ic_arrow_down.svg';
import back from '../assets/ic_back.svg';
import check from '../assets/ic_check.svg';
import plus from '../assets/ic_plus.svg';
import search from '../assets/ic_search.svg';
import searchDarker from '../assets/ic_search_darker.svg';
import X from '../assets/ic_X.svg';
import sort from '../assets/ic_sort.svg';
import statusActiveL from '../assets/status_active.svg';
import statusActiveR from '../assets/status_active-1.svg';
import statusInactiveL from '../assets/status_inactive.svg';
import statusInactiveR from '../assets/status_inactive-1.svg';
import statusWhiteL from '../assets/status_white.svg';
import statusWhiteR from '../assets/status_white-1.svg';



function Icon( { iconName , alt , ...rest } ){
  const icon = {
    eyeOpen ,
    eyeClose ,
    heartOpen,
    heartClose,
    arrowDown ,
    back,
    check ,
    plus,
    search,
    searchDarker ,
    X ,
    sort,
    statusActiveL ,
    statusActiveR ,
    statusInactiveL ,
    statusInactiveR,
    statusWhiteL ,
    statusWhiteR ,
  }
  return(
    <img src={icon[iconName]} alt={alt} {...rest}/>
  )
}

export default Icon ;