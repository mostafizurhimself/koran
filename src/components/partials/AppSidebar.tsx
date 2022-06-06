import React from 'react';
import { SidebarMenu } from '@/types';
import AppSidebarMenu from './AppSidebarMenu';
import { Transition } from '@headlessui/react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getSidebarState, setSidebarState } from '@/store/sidebar/sidebarSlice';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { FiHome, FiHeart, FiSettings, FiXCircle } from 'react-icons/fi';
import { AiOutlineRead } from 'react-icons/ai';
import Link from 'next/link';

const menu: SidebarMenu[] = [
  {
    label: 'Dashboard',
    icon: <FiHome size={20} />,
    href: '/dashboard',
  },
  {
    label: 'Favorite',
    icon: <FiHeart size={20} />,
    href: '/favorites',
  },
  {
    label: 'Settings',
    icon: <FiSettings size={20} />,
    href: '/settings',
  },
];

const AppSidebar = () => {
  const sidebarState = useAppSelector(getSidebarState);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="hidden lg:block w-20 shrink-0">
        <div className="h-20 flex justify-center items-center">
          <Link href="/dashboard">
            <a className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-500 text-white">
              <AiOutlineRead size={20} />
            </a>
          </Link>
        </div>
        <div className="mt-4">
          {menu.map((item, index) => (
            <AppSidebarMenu menu={item} key={index} />
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}

      <Transition
        show={sidebarState}
        as={React.Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={() => dispatch(setSidebarState(false))}
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-10"
        />
      </Transition>
      <Transition
        show={sidebarState}
        as={React.Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="h-screen w-60 bg-white dark:bg-gray-800 rounded-r-2xl shadow-lg text-gray-800 dark:text-white fixed inset-0 z-50">
          <div className="h-20 flex items-center px-6 bg-primary-500 rounded-tr-2xl">
            <div className="h-10 w-10 flex items-center justify-center rounded-full border-[1.5px] border-white text-white">
              <AiOutlineRead size={20} />
            </div>
            <div>
              <span className="text-2xl text-white font-semibold ml-3">Koran</span>
              <span className="text-white">.co</span>
            </div>
          </div>
          <div>
            {menu.map((item, index) => (
              <AppSidebarMenu menu={item} showLabel={true} key={index} />
            ))}
          </div>
          <div className="absolute top-0 right-0 -mr-10 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => dispatch(setSidebarState(false))}
            >
              <span className="sr-only">Close sidebar</span>
              <FiXCircle className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default AppSidebar;
