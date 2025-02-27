import React from 'react';

interface ButtonProps {
  label: React.ReactNode | string;
  type?: 'submit' | 'button' | 'reset';
  color?: 'primary' | 'secondary' | 'red' | 'green';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, type = 'submit', color = 'primary', size = 'medium', onClick }) => {
  const buttonClasses = {
    primary: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
    secondary: 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
    red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    green: 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  };

  const sizeClasses = {
    small: 'px-2 py-2 text-xs',
    medium: 'px-5 py-2.5 text-sm',
    large: 'px-5 py-3 text-base',
  };

  return (
    <button
      className={`rounded-md font-semibold transition-all duration-200 ${sizeClasses[size]} ${buttonClasses[color]} flex items-center`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
