
import React from 'react';

interface TitleProps {
  titleTag?: keyof JSX.IntrinsicElements;
  text?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

function Title ({ titleTag = 'h1', text, children, ...rest }: TitleProps) {
  const TitleComponent = titleTag;
 return (
  <div className="flex justify-between w-full my-6 mx-auto mobile:flex-col mobile:gap-3" {...rest} >
    <div className="text-xl font-bold leading-10">
      <TitleComponent>{text}</TitleComponent>
    </div>
    <div className="flex items-center gap-3">
      {children}
    </div>
  </div>
 )
}
export default Title;