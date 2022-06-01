import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getMode, getTheme, setMode, setTheme } from '@/store/global/globalSlice';
import { Book, Headphones, Moon, Sun } from 'react-feather';
import SearchInput from '@/components/shared/SearchInput';

const AppHeader = () => {
  const theme = useAppSelector(getTheme);
  const mode = useAppSelector(getMode);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
      document.documentElement.classList.add('dark');
    } else {
      dispatch(setTheme('light'));
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <div className="h-20 flex items-center px-4 lg:px-6">
      <h1>
        <span className="text-2xl text-primary-500 font-semibold">Koran</span>
        <span className="text-gray-700 dark:text-white">.co</span>
      </h1>
      <div className="ml-auto flex items-center">
        <div className="hidden md:block md:w-96">
          <SearchInput />
        </div>
        <button
          type="button"
          onClick={() => dispatch(setMode(mode === 'listening' ? 'reading' : 'listening'))}
          className="ml-3 h-8 w-8 flex justify-center items-center border hover:border-primary-500 rounded-full text-gray-800 dark:text-white hover:text-primary-500 focus:border-2 focus:border-primary-500 transition-colors duration-300"
        >
          {mode === 'listening' ? <Headphones height={16} /> : <Book height={16} />}
        </button>
        <button
          type="button"
          onClick={() => toggleTheme()}
          className="ml-3 h-8 w-8 flex justify-center items-center border hover:border-primary-500 rounded-full text-gray-800 dark:text-white hover:text-primary-500 focus:border-2 focus:border-primary-500 transition-all duration-300"
        >
          {theme === 'dark' ? <Sun height={16} /> : <Moon height={16} />}
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
