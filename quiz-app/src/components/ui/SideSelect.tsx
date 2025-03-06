'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  fields?: string[]
}

const Select: React.FC<InputProps> = ({ label, id, fields = [] }) => {

  return (
    <div className='mb-4 grid grid-cols-4 font-sans'>
      {label && (
        <label
          htmlFor={id}
          className="col-span-1 text-sm font-medium text-white ">
          {label}
        </label>
      )}
      <select id={id} className="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
        {fields.map((field: string, index: number) => (
          <option key={index} value={field}>{field}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
