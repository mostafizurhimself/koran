import { Surah } from '@/types';
import React, { useRef, useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

type Props = {
  surah: Surah;
  start: number;
  end: number;
  setCurrentAyah: (currentAyah: number) => void;
};

const AudioPlayer = ({ surah, start, end, setCurrentAyah }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioElement = useRef<HTMLAudioElement>(null);

  const getCurrentAudioUrl = (currentAyah = start) => {
    return surah.ayahs[currentAyah - 1].audio;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (audioElement.current) {
      if (!prevValue) {
        audioElement.current.play();
        //  animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioElement.current.pause();
        //  cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const playNextAudio = () => {
    if (audioElement.current) {
      // Get current ayah number
      const currentAyah = audioElement.current.getAttribute('data-ayah') || start.toString();
      // Get next ayah number, if it's the last ayah then play the first ayah
      const nextAyah = parseInt(currentAyah) < end ? parseInt(currentAyah) + 1 : start;
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
    <>
      <audio
        className="inline-block"
        ref={audioElement}
        src={getCurrentAudioUrl()}
        data-ayah="1"
        // autoPlay
        // controls
        onEnded={playNextAudio}
      >
        Your browser does not support HTML5 audio.
      </audio>
      <div className="h-16 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <button></button>
          <button
            type="button"
            onClick={togglePlayPause}
            className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center"
          >
            {isPlaying ? <BsPauseFill size={25} /> : <BsPlayFill className="ml-[2px]" size={25} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(AudioPlayer);
