import { SidebarMenu } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  menu: SidebarMenu;
  showLabel?: boolean;
};

const AppSidebarMenu = ({ menu, showLabel = false }: Props) => {
  const router = useRouter();
  return (
    <Link href={menu.href}>
      <a
        className={classNames(
          'h-14 flex items-center hover:text-primary-500 dark:hover:text-primary-500 hover:transition-colors duration-300',
          router.asPath === menu.href ? 'text-primary-500' : 'text-gray-800 dark:text-white',
          showLabel ? 'px-6' : 'justify-center'
        )}
      >
        {menu.icon}
        {showLabel && <span className="ml-3 text-sm">{menu.label}</span>}
      </a>
    </Link>
  );
};

export default AppSidebarMenu;
