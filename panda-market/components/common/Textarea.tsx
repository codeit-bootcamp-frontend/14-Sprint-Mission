import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  height?: string;
}

function TextArea({ height = 'h-[104px]', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-12">
      {props.label && <h2 className="font-700 text-18">*{props.label}</h2>}
      <textarea
        className={`w-full ${height} bg-gray-100 py-16 px-24 rounded-xl outline-none resize-none`}
        {...props}
      />
    </div>
  );
}

export default TextArea;
