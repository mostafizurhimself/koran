import ReciterList from '@/components/partials/ReciterList';
import TranslationList from '@/components/partials/TranslationList';
import AppLayout from '@/layouts/AppLayout';
import axios from '@/lib/axios';
import { Edition } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

type Props = {
  translations: Edition[];
  reciters: Edition[];
};

const SettingsPage: NextPage<Props> = ({ translations, reciters }) => {
  console.log(translations);
  return (
    <AppLayout title="Settings">
      <div className="p-6">
        <h2 className="font-semibold text-xl mb-6">Settings</h2>
        <div className="max-w-xl">
          <div>
            <h6 className="mb-2 font-medium">Translations</h6>
            <TranslationList translations={translations} />
          </div>

          <div className="mt-4">
            <h6 className="mb-2 font-medium">Reciters</h6>
            <ReciterList reciters={reciters} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resTranslation = await axios.get('/edition/type/translation');
  const resReciters = await axios.get('/edition?format=audio&language=ar&type=versebyverse');

  return {
    props: {
      translations: resTranslation.data.data as Edition[],
      reciters: resReciters.data.data as Edition[],
    },
  };
};

export default SettingsPage;
