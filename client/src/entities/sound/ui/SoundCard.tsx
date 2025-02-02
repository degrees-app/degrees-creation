import React from 'react';
import { Button } from 'react-bootstrap';
import { SoundType } from '../types/soundTypes';

type SoundCardProps = {
  sound: SoundType;
};

export default function SkinCard({ sound }: SoundCardProps): React.JSX.Element {
  return (
    <div>
      <Button>
        <span>{sound.type}</span>
      </Button>
    </div>
  );
}
