import React from 'react';
import { Bell, Headphones } from 'react-feather';
import SearchInput from '../shared/SearchInput';

const AppHeader = () => {
  return (
    <div className="h-20 flex items-center px-4 lg:px-6">
      <h1>
        <span className="text-2xl text-primary-500 font-semibold">Koran</span>
        <span className="text-gray-700">.co</span>
      </h1>
      <div className="ml-auto flex items-center">
        <div className="w-72">
          <SearchInput />
        </div>
        <button
          type="button"
          className="ml-3 h-8 w-8 flex justify-center items-center border hover:border-primary-500 rounded-full text-gray-800 hover:text-primary-500 focus:border-2 focus:border-primary-500 transition-colors duration-300"
        >
          <Headphones height={16} />
        </button>
        <button
          type="button"
          className="ml-3 h-8 w-8 flex justify-center items-center border hover:border-primary-500 rounded-full text-gray-800 hover:text-primary-500 focus:border-2 focus:border-primary-500 transition-all duration-300"
        >
          <Bell height={16} />
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
