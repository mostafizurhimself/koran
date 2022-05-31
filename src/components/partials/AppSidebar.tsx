import { SidebarMenu } from '@/types';
import React from 'react';
import { Book, Heart, Home, Users } from 'react-feather';
import AppSidebarMenu from './AppSidebarMenu';

const menu: SidebarMenu[] = [
  {
    name: 'Dashboard',
    icon: <Home height={20} />,
    href: '/dashboard',
  },
  {
    name: 'Favorite',
    icon: <Heart height={20} />,
    href: '/favorites',
  },
  {
    name: 'Resiters',
    icon: <Users height={20} />,
    href: '/resiters',
  },
];

const AppSidebar = () => {
  return (
    <div className="w-20 shrink-0">
      <div className="h-20 flex justify-center items-center">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-500 text-white">
          <Book height={16} />
        </div>
      </div>
      <div className="mt-4">
        {menu.map((item, index) => (
          <AppSidebarMenu menu={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AppSidebar;
