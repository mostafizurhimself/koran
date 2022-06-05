import { Surah } from '@/types';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillBackward, AiFillForward, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { FiRepeat } from 'react-icons/fi';
import styles from '@/assets/scss/modules/AudioPlayer.module.scss';
import classNames from 'classnames';

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
  const [autoPlay, setAutoPlay] = useState(false);

  const audioElement = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);

  const getCurrentAudioUrl = (currentAyah = start) => {
    return surah.ayahs[currentAyah - 1].audio;
  };

  // Toggle play/pause of audio
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (audioElement.current) {
      if (!prevValue) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
      }
    }
  };

  // Format seconds to minutes:seconds
  const calculateTime = (secs: number) => {
    const minutes = Math.round(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.round(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Play the next ayah
  const playNextAudio = () => {
    if (audioElement.current) {
      // Get current ayah number
      const currentAyah = audioElement.current.getAttribute('data-ayah') || start.toString();
      // Stop the player when it reaches the end of the audio & auto play is disabled
      if (parseInt(currentAyah) === end && !autoPlay) {
        stopPlaying();
        return;
      }
      // Get next ayah number
      const nextAyah = parseInt(currentAyah) < end ? parseInt(currentAyah) + 1 : start;
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

  // Stop the player
  const stopPlaying = () => {
    if (audioElement.current) {
      audioElement.current.setAttribute('data-ayah', start.toString());
      audioElement.current.src = getCurrentAudioUrl(start);
      audioElement.current.load();
      audioElement.current.pause();
      setCurrentAyah(start);
      setIsPlaying(false);
    }
  };

  // Play the previous ayah
  const playPreviousAudio = () => {
    if (audioElement.current) {
      // Get current ayah number & stop the player when it reaches the start of the audio & auto play is disabled
      const currentAyah = audioElement.current.getAttribute('data-ayah') || start.toString();
      if (parseInt(currentAyah) === start && !autoPlay) {
        stopPlaying();
        return;
      }
      // Get previous ayah number
      const previousAyah = parseInt(currentAyah) > start ? parseInt(currentAyah) - 1 : end;
      // Set the previous ayah to the data-ayah attribute
      audioElement.current.setAttribute('data-ayah', previousAyah.toString());
      // Set current ayah to the parent state
      setCurrentAyah(previousAyah);
      // Set the previous ayah audio url
      audioElement.current.src = getCurrentAudioUrl(previousAyah);
      // Load the previous ayah audio
      audioElement.current.load();
      // Play the previous ayah audio
      audioElement.current.play();
    }
  };

  // Handle audio element metadata loaded event
  const onLoadedMetadata = () => {
    if (audioElement.current) {
      const duration = Math.round(audioElement.current.duration);
      setDuration(duration);
      if (progressBar.current) {
        progressBar.current.max = duration.toString();
      }
    }
  };

  // Handle audio element timeupdate event
  const onTimeUpdate = () => {
    if (audioElement.current && progressBar.current) {
      const currentTime = Math.round(audioElement.current.currentTime);
      progressBar.current.value = currentTime.toString();
      changePlayerCurrentTime();
    }
  };

  // Handle input range change event
  const changeRange = () => {
    if (audioElement.current && progressBar.current) {
      audioElement.current.currentTime = parseInt(progressBar.current.value);
      changePlayerCurrentTime();
    }
  };

  // Update player current time & the slider
  const changePlayerCurrentTime = () => {
    if (progressBar.current) {
      const trackWidth = Math.round((parseInt(progressBar.current.value) / duration) * 100);
      progressBar.current.style.setProperty('--track-width', `${trackWidth}%`);
      setCurrentTime(parseInt(progressBar.current.value));
    }
  };

  return (
    <>
      <audio
        className="inline-block"
        ref={audioElement}
        src={getCurrentAudioUrl()}
        data-ayah="1"
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={playNextAudio}
      >
        Your browser does not support HTML5 audio.
      </audio>
      <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-4">
        <div className="flex justify-between">
          <p className="text-xs">{calculateTime(currentTime)}</p>
          <p className="text-xs">{calculateTime(duration)}</p>
        </div>
        <div className="mb-2">
          <input
            ref={progressBar}
            type="range"
            defaultValue="0"
            className={styles['progress-bar']}
            onChange={changeRange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={classNames(
              'transition-colors duration-200 ease-in-out focus:outline-none focus:shadow-outline',
              autoPlay ? 'text-primary-500' : 'text-gray-700 dark:text-white'
            )}
          >
            <FiRepeat size={18} />
          </button>
          <button type="button" onClick={() => playPreviousAudio()} className="text-gray-700 dark:text-white">
            <AiFillBackward size={25} />
          </button>
          <button
            type="button"
            onClick={togglePlayPause}
            className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center"
          >
            {isPlaying ? <BsPauseFill size={25} /> : <BsPlayFill className="ml-[2px]" size={25} />}
          </button>
          <button type="button" onClick={() => playNextAudio()} className="text-gray-700 dark:text-white">
            <AiFillForward size={25} />
          </button>
          <button className="text-gray-700 dark:text-white">
            <AiOutlineUnorderedList size={22} />
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(AudioPlayer);
