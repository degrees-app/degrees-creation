import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import styles from '../../../pages/SkinsPage/SkinsPage.module.scss'; 
import { BallType } from '../types/ballTypes';

type BallCardProps = {
  ball: BallType;
};

export default function BallCard({ ball }: BallCardProps): React.JSX.Element {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <span className={styles.title}>{ball.type}</span>
        </CardContent>
        <Button variant="contained" className={styles.button}>
          Select
        </Button>
      </Card>
    </div>
  );
}