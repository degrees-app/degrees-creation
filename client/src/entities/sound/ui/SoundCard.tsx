import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { SoundType } from '../types/soundTypes';

type SoundCardProps = {
  sound: SoundType;
};

export default function SoundCard({ sound }: SoundCardProps): React.JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(sound.url);

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

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <Button onClick={handlePlay}>
        <div>
          {isPlaying ? 'Pause' : 'Play'} {sound.type}
        </div>
      </Button>
      <Button onClick={handleStop}>Stop</Button>
    </div>
  );
}
