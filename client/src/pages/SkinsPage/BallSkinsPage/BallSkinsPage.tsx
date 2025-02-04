//главная
import React from 'react';
import { Col } from 'react-bootstrap';
import BallCard from '../../../entities/ball/ui/BallCard';
import { useGetBallsQuery } from '../../../entities/ball/api/ball';

export default function BallSkinsPage(): React.JSX.Element {
  const { data: balls, isSuccess } = useGetBallsQuery(undefined);

  if (!isSuccess) {
    return <>Loading...</>;
  }

  return (
    <div>
      {balls.length > 0 ? (
        balls.map((ball) => (
          <Col key={ball.id}>
            <BallCard ball={ball} />
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
