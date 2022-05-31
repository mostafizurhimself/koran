import Header from '@/components/partials/Header';
import Seo from '@/components/partials/Seo';
import React from 'react';

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
};

const DefaultLayout = ({ title, description, children }: Props) => {
  return (
    <>
      <Seo title={title} description={description || 'Koran.co is a platform for reading and listening quran.'} />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
