import React from 'react';
import { SkinType } from '../model/type';
import { Card, CardContent, Button } from '@mui/material';
import styles from '../../../pages/SkinsPage/SkinsPage.module.scss'; 

type SkinCardProps = {
  skin: SkinType;
};

export default function SkinCard({ skin }: SkinCardProps): React.JSX.Element {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <span className={styles.title}>{skin.title}</span>
        </CardContent>
        <Button variant="contained" className={styles.button}>
          Select
        </Button>
      </Card>
    </div>
  );
}