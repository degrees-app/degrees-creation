import { BackgroundForm } from '../../../widgets/BackgroundForm/BackgroundForm';
import { CanvasPhoneFrame } from '../../../entities/interface/ui/CanvasPhoneFlam';
import { Box } from '@mui/material';

export const BackgroundRedactorPage = () => {

  

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        padding: 3,
        justifyContent: 'center', // Центрирование по горизонтали
        alignItems: 'center', // Центрирование по вертикали
      }}
    >
      <BackgroundForm />
      <CanvasPhoneFrame />
    </Box>
  );
};
