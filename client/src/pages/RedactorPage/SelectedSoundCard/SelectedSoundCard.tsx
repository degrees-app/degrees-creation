import React from 'react';
import {  Card } from 'react-bootstrap';
import style from '../SelectedSoundCard/SelectedSoundCardStyle.module.scss';
import { SoundType } from '../../../entities/sound/types/soundTypes';

type SelectedSoundsCardProps = {
  selectedSounds: SoundType[];
  onRemoveSound: (soundId: number) => void;
};

export default function SelectedSoundCard({
  selectedSounds,
  onRemoveSound,
}: SelectedSoundsCardProps): React.JSX.Element {
  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>selected sounds</Card.Header>
      <Card.Body className={style.cardBody}>
        {selectedSounds.map((sound) => (
          <div key={sound.id} className={style.selectedSoundItem}>
            <div>{sound.type}</div>
            <div onClick={() => onRemoveSound(sound.id)} className={style.removeButton}>
              remove.
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
