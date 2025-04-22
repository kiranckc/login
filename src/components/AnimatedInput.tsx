import React, { useState } from 'react';

interface AnimatedInputProps {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <input
        type={type}
        id={id}
        className={`
          w-full h-12 px-4 pt-2
          bg-transparent 
          border-2 rounded-lg
          outline-none 
          transition-all duration-300
          ${isFocused || value ? 'border-purple-500' : 'border-gray-400'}
          ${isFocused || value ? 'text-white' : 'text-gray-300'}
          focus:border-purple-500
          peer
        `}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4
          transition-all duration-300 ease-in-out
          pointer-events-none
          text-gray-400
          ${isFocused || value ? 'text-sm -top-2 bg-[#151a36] px-1 text-purple-400' : 'text-base top-3'}
          peer-focus:text-sm
          peer-focus:-top-2
          peer-focus:bg-[#151a36]
          peer-focus:px-1
          peer-focus:text-purple-400
        `}
      >
        {placeholder}
      </label>
      <div
        className={`
          absolute bottom-0 left-0
          h-[2px] bg-purple-500
          transition-all duration-300 ease-out
          ${isFocused ? 'w-full' : 'w-0'}
        `}
      />
    </div>
  );
};

export default AnimatedInput;