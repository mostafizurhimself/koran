import AppLayout from '@/layouts/AppLayout';
import { SurahAudio } from '@/types';
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRef, useState } from 'react';

interface Props {
  surah: SurahAudio;
}

const Surah: NextPage<Props> = ({ surah }) => {
  const audioElement = useRef<HTMLAudioElement>(null);

  const getCurrentAudioUrl = (currentAyah = 1) => {
    return surah.ayahs[currentAyah - 1].audio;
  };

  const playNextAudio = () => {
    const currentAyah = audioElement?.current?.getAttribute('data-ayah') || '1';
    const nextAyah = parseInt(currentAyah) + 1;
  };

  return (
    <AppLayout title="Surah">
      <audio ref={audioElement} src={getCurrentAudioUrl()} data-ayah="1" autoPlay controls onEnded={playNextAudio}>
        Your browser does not support HTML5 audio.
      </audio>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentSurah = context.params?.number;
  const res = await axios.get(`http://api.alquran.cloud/v1/surah/${currentSurah}/ar.abdurrahmaansudais`);
  const data = (await res.data.data) as SurahAudio;
  return {
    props: {
      surah: data,
    },
  };
};

export default Surah;
