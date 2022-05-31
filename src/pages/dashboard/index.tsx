import SurahList from '@/components/partials/SurahList';
import AppLayout from '@/layouts/AppLayout';
import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import { Fragment } from 'react';

const Dashboard: NextPage = () => {
  return (
    <AppLayout title="Koran.co | Dashboard">
      <Tab.Group>
        <Tab.List className="tab-list">
          <Tab as={Fragment}>
            {({ selected }) => <button className={selected ? 'tab active' : 'tab'}>Surah</button>}
          </Tab>
          <Tab as={Fragment}>{({ selected }) => <button className={selected ? 'tab active' : 'tab'}>Para</button>}</Tab>
          <Tab as={Fragment}>{({ selected }) => <button className={selected ? 'tab active' : 'tab'}>Juz</button>}</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <SurahList />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </AppLayout>
  );
};

export default Dashboard;
