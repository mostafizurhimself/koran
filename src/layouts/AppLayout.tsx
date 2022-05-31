import AppHeader from '@/components/partials/AppHeader';
import Seo from '@/components/partials/Seo';
import React from 'react';
import AppSidebar from '@/components/partials/AppSidebar';
import AppRightBar from '@/components/partials/AppRightBar';

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Dashboard = ({ title, description, children }: Props) => {
  return (
    <>
      <Seo title={title} description={description || 'Koran.co is a platform for reading and listening quran.'} />
      <div className="h-screen flex bg-white">
        <AppSidebar />
        <div className="flex-grow">
          <AppHeader />
          <main id="main" className="p-6 bg-gray-100 h-full w-full rounded-t-2xl shadow-inner">
            {children}
          </main>
        </div>
        <AppRightBar />
      </div>
    </>
  );
};

export default Dashboard;
