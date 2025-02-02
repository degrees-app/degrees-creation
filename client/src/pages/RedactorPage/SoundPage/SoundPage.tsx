//главная
import React from 'react';
import { Col } from 'react-bootstrap';
import SoundCard from '../../../entities/sound/ui/SoundCard';
import { useGetSoundsQuery } from '../../../entities/sound/api/sound';

export default function SoundPage(): React.JSX.Element {
  const { data: sounds, isSuccess } = useGetSoundsQuery(undefined);

  if (!isSuccess) {
    return <>Loading...</>;
  }

  return (
    <div>
      {sounds.length > 0 ? (
        sounds.map((sound) => (
          <Col key={sound.id}>
            <SoundCard sound={sound} />
          </Col>
        ))
      ) : (
        <Col>
          <div>No sounds available</div>
        </Col>
      )}
    </div>
  );
}
