import React from 'react';

interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const TextInput: React.FC<InputProps> = ({
  name,
  type,
  label,
  placeholder,
}) => {
  return (
    <div>
      <label className='text-xs block' htmlFor={name}>
        {label}
      </label>
      <input
        className='px-2.5 w-full h-10 border-solid border outline-none border-gray-200 focus:border-green-500 bg-white text-sm rounded-lg'
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
