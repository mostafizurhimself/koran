import { Surah } from '@/types';
import React, { useRef } from 'react';

type Props = {
  surah: Surah;
  from?: number;
  to?: number;
  setCurrentAyah: (currentAyah: number) => void;
};

const AudioPlayer = ({ surah, from, to, setCurrentAyah }: Props) => {
  const audioElement = useRef<HTMLAudioElement>(null);

  const getCurrentAudioUrl = (currentAyah = 1) => {
    return surah.ayahs[currentAyah - 1].audio;
  };

  const playNextAudio = () => {
    if (audioElement.current) {
      // Get current ayah number
      const currentAyah = audioElement.current.getAttribute('data-ayah') || '1';
      // Get next ayah number, if it's the last ayah then play the first ayah
      const nextAyah = parseInt(currentAyah) < surah.ayahs.length ? parseInt(currentAyah) + 1 : 1;
      //   const nextAyah = parseInt(currentAyah) < 6 ? parseInt(currentAyah) + 1 : 1;
      // Set the next ayah to the data-ayah attribute
      audioElement.current.setAttribute('data-ayah', nextAyah.toString());
      // Set current ayah to the parent state
      setCurrentAyah(nextAyah);
      // Set the next ayah audio url
      audioElement.current.src = getCurrentAudioUrl(nextAyah);
      // Load the next ayah audio
      audioElement.current.load();
      // Play the next ayah audio
      audioElement.current.play();
    }
  };
  return (
    <audio
      className="inline-block"
      ref={audioElement}
      src={getCurrentAudioUrl()}
      data-ayah="1"
      // autoPlay
      controls
      onEnded={playNextAudio}
    >
      Your browser does not support HTML5 audio.
    </audio>
  );
};

export default React.memo(AudioPlayer);
