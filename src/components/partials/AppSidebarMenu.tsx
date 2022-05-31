import { SidebarMenu } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  menu: SidebarMenu;
};

const AppSidebarMenu = ({ menu }: Props) => {
  const router = useRouter();
  return (
    <Link href={menu.href}>
      <a
        className={classNames(
          'h-14 flex justify-center items-center hover:text-primary-500 transition-colors duration-300',
          router.asPath === menu.href ? 'text-primary-500' : 'text-gray-800'
        )}
      >
        {menu.icon}
      </a>
    </Link>
  );
};

export default AppSidebarMenu;
