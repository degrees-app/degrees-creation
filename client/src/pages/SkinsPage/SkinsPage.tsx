//главная
import React from 'react';
import { useGetSkinsQuery } from '../../entities/skin/api/skin';
import { Col, Row } from 'react-bootstrap';
import SkinCard from '../../entities/skin/ui/SkinCard';

export default function SkinsPage(): React.JSX.Element {
  const { data: skins, isSuccess } = useGetSkinsQuery(undefined);

  if (!isSuccess) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Row>
        {skins.length > 0 ? (
          skins.map((skin) => (
            <Col key={skin.id}>
              <SkinCard skin={skin} />
            </Col>
          ))
        ) : (
          <Col>
            <div>No skins available</div>
          </Col>
        )}
      </Row>
    </div>
  );
}
