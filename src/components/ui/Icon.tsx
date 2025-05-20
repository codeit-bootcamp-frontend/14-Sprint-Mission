import React from 'react';
import Image from 'next/image';

const eyeOpen = '/assets/eye_1.svg';
const eyeClose = '/assets/eye_2.svg';

const heartOpen = '/assets/heart_1.svg';
const heartClose = '/assets/heart_2.svg';

const arrowDown = '/assets/ic_arrow_down.svg';
const back = '/assets/ic_back.svg';
const check = '/assets/ic_check.svg';
const plus = '/assets/ic_plus.svg';
const search = '/assets/ic_search.svg';
const searchDarker = '/assets/ic_search_darker.svg';
const X = '/assets/ic_X.svg';
const sort = '/assets/ic_sort.svg';

const statusActiveL = '/assets/status_active.svg';
const statusActiveR = '/assets/status_active-1.svg';
const statusInactiveL = '/assets/status_inactive.svg';
const statusInactiveR = '/assets/status_inactive-1.svg';
const statusWhiteL = '/assets/status_white.svg';
const statusWhiteR = '/assets/status_white-1.svg';

const ic_kebab = '/assets/ic_kebab.svg';

const medal = '/assets/ic_medal.svg';

const ICON = {
  eyeOpen,
  eyeClose,
  heartOpen,
  heartClose,
  arrowDown,
  back,
  check,
  plus,
  search,
  searchDarker,
  X,
  ic_kebab,
  sort,
  statusActiveL,
  statusActiveR,
  statusInactiveL,
  statusInactiveR,
  statusWhiteL,
  statusWhiteR,
  medal,
};

interface IconProps {
  iconName: keyof typeof ICON;
  alt: string;
  [key: string]: any;
}

function Icon({ iconName, alt, width="24", height="24", ...rest }: IconProps) {
  return (
    <Image src={ICON[iconName]} width={width} height={height} alt={alt} {...rest} />
  );
}


export default Icon ;