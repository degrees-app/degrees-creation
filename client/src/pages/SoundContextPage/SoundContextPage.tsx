// SoundContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { SoundType } from '../../entities/sound/types/soundTypes';

type SoundContextType = {
  selectedSounds: SoundType[];
  setSelectedSounds: (sounds: SoundType[]) => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSounds, setSelectedSounds] = useState<SoundType[]>([]);

  return (
    <SoundContext.Provider value={{ selectedSounds, setSelectedSounds }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};
