import AppLayout from '@/layouts/AppLayout';
import { SurahAudio } from '@/types';
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface Props {
  surah: SurahAudio;
}

const Surah: NextPage<Props> = ({ surah }) => {
  const [currentAyah, setCurrentAyah] = useState(1);

  const getCurrentAudioUrl = () => {
    return surah.ayahs[currentAyah - 1].audio;
  };

  useEffect(() => {
    console.log(getCurrentAudioUrl());
  }, []);

  return (
    <AppLayout title="Surah">
      {/* <audio controls loop={true} id="audio" preload="none" tabIndex={0}>
        <source src="/audio/001/001000.mp3" />
        <source src="/audio/001/001001.mp3" />
        <source src="/audio/001/001002.mp3" />
        Your browser does not support HTML5 audio.
      </audio> */}
      <AudioPlayer
        autoPlay
        preload="auto"
        src={getCurrentAudioUrl()}
        crossOrigin="http://api.alquran.cloud/"
        onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentSurah = context.params?.number;
  const res = await axios.get(`http://api.alquran.cloud/v1/surah/${currentSurah}/ar.alafasy`);
  const data = (await res.data.data) as SurahAudio;
  return {
    props: {
      surah: data,
    },
  };
};

export default Surah;
