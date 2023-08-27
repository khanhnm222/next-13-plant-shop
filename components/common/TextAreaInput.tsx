import React from 'react';

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
}

const TextAreaInput: React.FC<InputProps> = ({ name, label, placeholder }) => {
  return (
    <div>
      <label className='text-xs block' htmlFor={name}>
        {label}
      </label>
      <textarea
        className='p-2.5 w-full resize-none border-solid border outline-none border-gray-200 focus:border-green-500 invalid:border-red-600 bg-white text-sm rounded-lg'
        rows={3}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaInput;
