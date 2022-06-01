import AppHeader from '@/components/partials/AppHeader';
import Seo from '@/components/partials/Seo';
import React, { useLayoutEffect } from 'react';
import AppSidebar from '@/components/partials/AppSidebar';
import AppRightBar from '@/components/partials/AppRightBar';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
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
      <Seo title={title} description={description || 'Koran.co is a platform for reading and listening quran.'} />
      <div className="h-screen flex bg-white dark:bg-gray-800">
        <AppSidebar />
        <div className="flex-grow">
          <AppHeader />
          <OverlayScrollbarsComponent
            options={{ scrollbars: { autoHide: 'scroll' } }}
            style={{ maxHeight: 'calc(100vh - 80px)', borderRadius: '1rem 1rem 0 0' }}
          >
            <main id="main" className="p-6 bg-gray-100 dark:bg-gray-700 w-full rounded-t-2xl shadow-inner">
              {children}
            </main>
          </OverlayScrollbarsComponent>
        </div>
        <AppRightBar />
      </div>
    </>
  );
};

export default Dashboard;
