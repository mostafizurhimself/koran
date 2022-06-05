import React from 'react';
import SurahList from '@/components/partials/SurahList';
import AppLayout from '@/layouts/AppLayout';
import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Fragment } from 'react';
import { FiVolume2 } from 'react-icons/fi';
import { HiOutlineAnnotation } from 'react-icons/hi';

const Dashboard: NextPage = () => {
  return (
    <AppLayout title="Dashboard">
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'scroll' } }}
        style={{ maxHeight: 'calc(100vh - 5rem)', borderRadius: '1rem 1rem 0 0' }}
      >
        <div className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-200">Asslamualaikum</p>
            <h6 className="text-xl font-semibold text-gray-800 dark:text-white">Ahmed Shakil</h6>
          </div>
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            <div className="p-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow">
              <h6 className="font-semibold text-gray-50">Last Read</h6>
              <Link href="/surah">
                <a className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Al Faatiha</h3>
                    <p className="text-sm text-gray-50">Ayah No: 1</p>
                  </div>
                  <HiOutlineAnnotation size={70} className="text-gray-200" />
                </a>
              </Link>
            </div>
            <div className="p-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow">
              <h6 className="font-semibold text-gray-50">Last Listened</h6>
              <Link href="/surah">
                <a className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Al Mulk</h3>
                    <p className="text-sm text-gray-50">Ayah No: 3</p>
                  </div>
                  <FiVolume2 size={70} className="text-gray-200" />
                </a>
              </Link>
            </div>
          </div>
          <SurahList />
          {/* <Tab.Group>
            <div className="flex justify-center">
              <Tab.List className="tab-list">
                <Tab as={Fragment}>
                  {({ selected }) => <button className={selected ? 'tab active' : 'tab'}>Surah</button>}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => <button className={selected ? 'tab active' : 'tab'}>Juz</button>}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => <button className={selected ? 'tab active' : 'tab'}>Page</button>}
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <SurahList />
              </Tab.Panel>
              <Tab.Panel className="">
                <div className="text-center">Coming Soon...</div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="text-center">Coming Soon</div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group> */}
        </div>
      </OverlayScrollbarsComponent>
    </AppLayout>
  );
};

export default Dashboard;
