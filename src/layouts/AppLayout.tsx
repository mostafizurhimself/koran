import AppHeader from '@/components/partials/AppHeader';
import Seo from '@/components/partials/Seo';
import React, { useLayoutEffect } from 'react';
import AppSidebar from '@/components/partials/AppSidebar';
import AppRightBar from '@/components/partials/AppRightBar';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getTheme } from '@/store/global/globalSlice';

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Dashboard = ({ title, description, children }: Props) => {
  const theme = useAppSelector(getTheme);

  useLayoutEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    return () => {};
  }, []);

  return (
    <>
      <Seo
        title={`Koran.co | ${title}`}
        description={description || 'Koran.co is a platform for reading and listening quran.'}
      />
      <div className="h-screen flex bg-white dark:bg-gray-800">
        <AppSidebar />
        <div className="flex-grow">
          <AppHeader />
          <main
            className="bg-gray-100 dark:bg-gray-700 w-full rounded-t-2xl flex flex-col shadow-inner"
            style={{ minHeight: 'calc(100vh - 80px)' }}
          >
            {children}
          </main>
        </div>
        <AppRightBar />
      </div>
    </>
  );
};

export default Dashboard;
