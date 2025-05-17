
import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

interface BestBadgeProps {
  className?: string;
}

function BestBadge({ className }: BestBadgeProps) {
 return (
  <div className={clsx("bg-primary-100 rounded-b-[16px] flex gap-[4px] items-center justify-center h-[30px] w-[102px]",className)}>
    <Icon iconName="medal" width="16" height="16" alt="베스트 상품 아이콘" />
    <span className="text-base text-white">
      Best
    </span>
  </div>
 )
}
export default BestBadge;