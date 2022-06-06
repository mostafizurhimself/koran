import SearchInput from '@/components/shared/SearchInput';
import { SearchContext, SearchContextType } from '@/context/SearchContext';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getMode, getTheme, setMode, setTheme } from '@/store/global/globalSlice';
import { setSidebarState } from '@/store/sidebar/sidebarSlice';
import { Mode, Theme } from '@/types';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useContext } from 'react';
import { BsBook } from 'react-icons/bs';
import { FiHeadphones, FiMoon, FiSun } from 'react-icons/fi';
import { HiMenuAlt2 } from 'react-icons/hi';

type Props = {
  title: string;
};

const AppHeader = ({ title }: Props) => {
  const theme = useAppSelector(getTheme);
  const mode = useAppSelector(getMode);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { search, setSearch } = useContext(SearchContext) as SearchContextType;

  // Toggle dark and light theme
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      dispatch(setTheme(Theme.DARK));
      document.documentElement.classList.add(Theme.DARK);
    } else {
      dispatch(setTheme(Theme.LIGHT));
      document.documentElement.classList.remove(Theme.DARK);
    }
  };

  // Handle search input change
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Debounce search input change
  const debouncedChangeHandler = useCallback(debounce(onSearchChange, 300), []);

  return (
    <div className="h-20 flex justify-between items-center px-4 lg:px-6">
      <div className="flex items-center">
        <button type="button" onClick={() => dispatch(setSidebarState(true))}>
          <HiMenuAlt2 size={25} className="mr-2 text-gray-700 dark:text-gray-100 inline-block lg:hidden" />
        </button>
        <div className="hidden lg:inline-block">
          <Link href="/dashboard">
            <a>
              <span className="text-2xl text-primary-500 font-semibold">Koran</span>
              <span className="text-gray-700 dark:text-white">.co</span>
            </a>
          </Link>
        </div>
        <h2 className="inline-block lg:hidden text-xl font-medium">{title}</h2>
      </div>
      {router.asPath === '/dashboard' && (
        <div className="hidden md:block md:w-96">
          <SearchInput defaultValue={''} onChange={debouncedChangeHandler} />
        </div>
      )}
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => dispatch(setMode(mode === Mode.LISTENING ? Mode.READING : Mode.LISTENING))}
          className="ml-3 h-8 w-8 flex justify-center items-center border hover:border-primary-500 rounded-full text-gray-500 dark:text-white hover:text-primary-500 focus:border-2 focus:border-primary-500 transition-colors duration-300"
        >
          {mode === 'reading' ? <FiHeadphones height={16} /> : <BsBook height={16} />}
        </button>
        <button
          type="button"
          onClick={() => toggleTheme()}
          className="ml-3 h-8 w-8 flex justify-center items-center border hover:border-primary-500 rounded-full text-gray-500 dark:text-white hover:text-primary-500 focus:border-2 focus:border-primary-500 transition-all duration-300"
        >
          {theme === 'dark' ? <FiSun height={16} /> : <FiMoon height={16} />}
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
