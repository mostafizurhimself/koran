import React from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <header className="h-16 flex items-center shadow">
        <div className="container">
          <h1>
            <span className="text-2xl text-primary-500 font-semibold">Koran</span>
            <span className="text-gray-700">.co</span>
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
