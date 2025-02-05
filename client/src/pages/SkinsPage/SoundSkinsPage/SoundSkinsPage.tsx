import React from 'react';
import { useSoundContext } from '../../SoundContextPage/SoundContextPage';
import SelectedSoundCard from '../../RedactorPage/SelectedSoundCard/SelectedSoundCard';

export default function SoundSkinsPage(): React.JSX.Element {
  const { selectedSounds, setSelectedSounds } = useSoundContext();

  const handleRemoveSound = (soundId: number) => {
    const updatedSounds = selectedSounds.filter((sound) => sound.id !== soundId);
    setSelectedSounds(updatedSounds);
  };

  // Группировка звуков по 3 в карточку
  const groupedSounds = [];
  for (let i = 0; i < selectedSounds.length; i += 3) {
    groupedSounds.push(selectedSounds.slice(i, i + 3));
  }

  return (
    <div>
      <h1>selected sounds</h1>
      {groupedSounds.length > 0 ? (
        groupedSounds.map((group, index) => (
          <SelectedSoundCard
            key={index}
            selectedSounds={group} 
            onRemoveSound={handleRemoveSound}
          />
        ))
      ) : (
        <div>no selected sounds</div>
      )}
    </div>
  );
}
