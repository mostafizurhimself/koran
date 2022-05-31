import React from 'react';
import { Search } from 'react-feather';

const SearchInput = () => {
  return (
    <div className="flex items-center border focus-within:border-2 focus-within:border-primary-500 rounded-full overflow-hidden">
      <input placeholder="Search" className="block w-full px-5 py-3 text-sm outline-none border-none" />
      <div className="px-2 py-3">
        <Search height={16} />
      </div>
    </div>
  );
};

export default SearchInput;
