import AudioPlayer from '@/components/shared/AudioPlayer';
import SimpleSelect from '@/components/shared/SimpleSelect';
import SurahPanel from '@/components/shared/SurahPanel';
import AppLayout from '@/layouts/AppLayout';
import { Ayah, Mode, Surah, Theme } from '@/types';
import axios from '@/lib/axios';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getMode } from '@/store/global/globalSlice';

interface Props {
  surah: Surah;
}

const Surah: NextPage<Props> = ({ surah }) => {
  const [currentAyah, setCurrentAyah] = useState(1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(surah.numberOfAyahs);
  const mode = useAppSelector(getMode);

  return (
    <AppLayout title="Surah">
      <div className="p-6 w-[100vw] max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <div className="px-3">
          <h1 className="text-2xl font-semibold text-center">{surah.name}</h1>
          <h3 className="text-lg font-semibold text-center mt-2">
            {surah.number}. {surah.englishName} ({surah.englishNameTranslation})
          </h3>
        </div>
        <div className="flex justify-between mt-2 px-3">
          <div>
            <SimpleSelect
              label="Start"
              defaultValue={start}
              onChange={(e) => setStart(Number(e.target.value))}
              options={surah.ayahs.map((ayah) => {
                return {
                  value: ayah.numberInSurah,
                  label: ayah.numberInSurah,
                };
              })}
            />
          </div>
          <div className="text-right">
            <SimpleSelect
              label="End"
              defaultValue={end}
              onChange={(e) => setEnd(Number(e.target.value))}
              options={surah.ayahs
                .filter((ayah) => ayah.numberInSurah >= start)
                .map((ayah) => {
                  return {
                    value: ayah.numberInSurah,
                    label: ayah.numberInSurah,
                  };
                })}
            />
          </div>
        </div>
        <div className="mt-2 flex-grow">
          <SurahPanel currentAyah={currentAyah} ayahs={surah.ayahs} />
        </div>
        {mode === Mode.LISTENING && (
          <div className="mt-4 text-center">
            <AudioPlayer start={start} end={end} surah={surah} setCurrentAyah={setCurrentAyah} />
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentSurah = context.params?.number;
  const res = await axios.get(`/surah/${currentSurah}/editions/ar.abdurrahmaansudais,en.asad`);
  const data = res.data.data as [
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
