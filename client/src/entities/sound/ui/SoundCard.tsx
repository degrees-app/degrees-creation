import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { SoundType } from '../types/soundTypes';
import style from '../../sound/ui/SoundCardStyle.module.scss';

type SoundCardProps = {
  sound: SoundType;
};

export default function SoundCard({ sound }: SoundCardProps): React.JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log(sound);
    audioRef.current = new Audio(sound.url);
    console.log(sound.url);
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [sound.url]);

  const handlePlay = () => {
    if (audioRef.current) {
      document.querySelectorAll('audio').forEach((audio) => {
        if (audio !== audioRef.current) {
          audio.pause();
          audio.currentTime = 0;
        }
      });

      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Ошибка воспроизведения звука:', error);
          });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      <Button className={style.button} onClick={handlePlay}>
        <div>{sound.type}</div>
      </Button>
    </div>
  );
}
