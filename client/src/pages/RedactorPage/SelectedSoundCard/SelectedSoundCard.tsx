import React from 'react';
import { Card, Container } from 'react-bootstrap';
import style from '../SelectedSoundCard/SelectedSoundCardStyle.module.scss';
import { SoundType } from '../../../entities/sound/types/soundTypes';
import SoundCard from '../../../entities/sound/ui/SoundCard';

type SelectedSoundsCardProps = {
  selectedSounds: SoundType[];
  onRemoveSound: (soundId: number) => void;
};

export default function SelectedSoundCard({
  selectedSounds,
}: SelectedSoundsCardProps): React.JSX.Element {
  return (
    <Card className={style.card}>
      <Card.Body className={style.cardBody}>
        {selectedSounds.map((sound) => (
          <SoundCard sound={sound} />
          //   <div key={sound.id} className={style.selectedSoundItem}>
          //     <div>{sound.type}</div>
          //     <div onClick={() => onRemoveSound(sound.id)} className={style.removeButton}>
          //       remove.
          //     </div>
          //   </div>
        ))}
      </Card.Body>
    </Card>
  );
}
