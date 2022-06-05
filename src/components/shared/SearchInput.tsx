import React from 'react';
import { FiSearch } from 'react-icons/fi';

type Props = {
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ defaultValue = '', placeholder, onChange }: Props) => {
  return (
    <div className="flex items-center border focus-within:border-2 focus-within:border-primary-500 rounded-full overflow-hidden">
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full px-5 py-3 text-sm outline-none border-none bg-transparent"
      />
      <div className="px-2 py-3">
        <FiSearch size={16} className="dark:text-white" />
      </div>
    </div>
  );
};

export default SearchInput;
