import { TextareaHTMLAttributes } from 'react';

function Textarea({
  placeholder,
  onChange,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full h-[104px] bg-gray-100 py-16 px-24 rounded-xl outline-none resize-none"
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Textarea;
