import React from 'react';
import { Button } from 'react-bootstrap';
import { SkinType } from '../model/type';

type SkinCardProps = {
  skin: SkinType;
};

export default function SkinCard({ skin }: SkinCardProps): React.JSX.Element {
  return (
    <div>
      <Button>
        <span>{skin.title}</span>
      </Button>
    </div>
  );
}
