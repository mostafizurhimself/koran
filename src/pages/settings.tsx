import ReciterList from '@/components/partials/ReciterList';
import TranslationList from '@/components/partials/TranslationList';
import ListBox from '@/components/shared/ListBox';
import { useAppSelector } from '@/hooks/use-app-selector';
import AppLayout from '@/layouts/AppLayout';
import axios from '@/lib/axios';
import {
  getArabicFontSize,
  getTranslationFontSize,
  setArabicFontSize,
  setTranslationFontSize,
} from '@/store/settings/settingSlice';
import { Edition, FontSize } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import { useDispatch } from 'react-redux';

type Props = {
  translations: Edition[];
  reciters: Edition[];
};

const fontSizes = [
  { value: FontSize.SMALL, label: 'Small' },
  { value: FontSize.NORMAL, label: 'Normal' },
  { value: FontSize.LARGE, label: 'Large' },
  { value: FontSize.EXTRA_LARGE, label: 'Extra Large' },
];

const SettingsPage: NextPage<Props> = ({ translations, reciters }) => {
  const arabicFontSize = useAppSelector(getArabicFontSize);
  const translationFontSize = useAppSelector(getTranslationFontSize);
  const dispatch = useDispatch();

  return (
    <AppLayout title="Settings">
      <div className="p-6">
        <h2 className="font-semibold text-xl mb-6">Settings</h2>
        <div className="max-w-xl">
          <div>
            <h6 className="mb-2 font-medium text-sm">Translations</h6>
            <TranslationList translations={translations} />
          </div>

          <div className="mt-4">
            <h6 className="mb-2 font-medium text-sm">Reciters</h6>
            <ReciterList reciters={reciters} />
          </div>
          <div className="mt-4">
            <h6 className="mb-2 font-medium text-sm">Arabic Font Size</h6>
            <ListBox
              defaultValue={fontSizes.find((f) => f.value === (arabicFontSize || FontSize.NORMAL))}
              options={fontSizes}
              onChange={(option) => {
                option && dispatch(setArabicFontSize(option.value as FontSize));
              }}
            />
          </div>
          <div className="mt-4">
            <h6 className="mb-2 font-medium text-sm">Translation Font Size</h6>
            <ListBox
              defaultValue={fontSizes.find((f) => f.value === (translationFontSize || FontSize.NORMAL))}
              options={fontSizes}
              onChange={(option) => {
                option && dispatch(setTranslationFontSize(option.value as FontSize));
              }}
            />
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
