import AppHeader from '@/components/partials/AppHeader';
import Seo from '@/components/partials/Seo';
import React from 'react';
import AppSidebar from '@/components/partials/AppSidebar';
import AppRightBar from '@/components/partials/AppRightBar';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

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
          <OverlayScrollbarsComponent
            options={{ scrollbars: { autoHide: 'scroll' } }}
            style={{ maxHeight: 'calc(100vh - 80px)', borderRadius: '1rem 1rem 0 0' }}
          >
            <main id="main" className="p-6 bg-gray-100 w-full rounded-t-2xl shadow-inner">
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
