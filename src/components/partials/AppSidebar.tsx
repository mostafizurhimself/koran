import { SidebarMenu } from '@/types';
import { BookOpenIcon } from '@heroicons/react/outline';
import { Heart, Home, Settings, Users } from 'react-feather';
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
    name: 'Settings',
    icon: <Settings height={20} />,
    href: '/settings',
  },
];

const AppSidebar = () => {
  return (
    <div className="hidden lg:block w-20 shrink-0">
      <div className="h-20 flex justify-center items-center">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-500 text-white">
          <BookOpenIcon height={20} />
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
