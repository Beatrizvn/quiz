'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {

  return (
    <div className='mb-5 grid grid-cols-4 font-sans'>
      {label && (
        <label
          htmlFor={id}
          className="col-span-1 text-sm font-medium text-white ">
          {label}
        </label>
      )}
      <input
        className="col-span-3 rounded-t-lg w-full text-sm text-white bg-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:shadow-md focus:ring-0 peer "
        {...props}
        id={id}
      />
    </div>
  );
};

export default Input;
