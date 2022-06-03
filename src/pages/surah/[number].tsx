import AudioPlayer from '@/components/shared/AudioPlayer';
import SurahPanel from '@/components/shared/SurahPanel';
import AppLayout from '@/layouts/AppLayout';
import { Ayah, Surah } from '@/types';
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

interface Props {
  surah: Surah;
}

const Surah: NextPage<Props> = ({ surah }) => {
  const [currentAyah, setCurrentAyah] = useState(1);
  return (
    <AppLayout title="Surah">
      <div className="w-full max-w-lg mx-auto">
        <div>
          <h1 className="text-2xl font-semibold text-center">
            {surah.englishName} ({surah.name})
          </h1>
        </div>
        <div className="mt-8">
          <SurahPanel currentAyah={currentAyah} ayahs={surah.ayahs} />
        </div>
        <div className="mt-10 text-center">
          <AudioPlayer surah={surah} setCurrentAyah={setCurrentAyah} />
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentSurah = context.params?.number;
  const res = await axios.get(
    `http://api.alquran.cloud/v1/surah/${currentSurah}/editions/ar.abdurrahmaansudais,en.asad`
  );
  const data = (await res.data.data) as [
    Surah<Omit<Ayah, 'translation'>[]>,
    Surah<Omit<Ayah, 'audio' | 'audioSecondary' | 'translation'>[]>
  ];
  // Merge translation and audio
  const ayahs = data[0].ayahs.map((ayah, index) => {
    return {
      ...ayah,
      translation: data[1].ayahs[index].text,
    };
  });
  return {
    props: {
      surah: { ...data[0], ayahs },
    },
  };
};

export default Surah;
