import { forwardRef } from 'react';
import Link from 'next/link';

const ButtonLink = ({ url, leftIcon = null, rightIcon = null, children }, ref) => {
  return (
    <Link
      ref={ref}
      href={url}
      className='relative flex items-center w-full border-white border-2 rounded-xl cursor-pointer py-3 px-4 hover:bg-white transition-all duration-300 hover:text-[#ff57A7]'
      target="_blank"
      rel="noreferrer noopener"
    >
      {leftIcon && <div>{leftIcon}</div>}
      <span className='flex-1 text-left'>
        {children}
      </span>
      {rightIcon && <div>{rightIcon}</div>}
    </Link>
  );
};

export default forwardRef(ButtonLink);
