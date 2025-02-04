import { InterfaceForm } from '../../../widgets/InterfaceForm/InterfaceForm';
import { CanvasPhoneFrame } from '../../../entities/interface/ui/CanvasPhoneFlam';
import { Box } from '@mui/material';

export const InterfaceRedactorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        padding: 3,
        justifyContent: 'center', // Центрирование по горизонтали
        alignItems: 'center', // Центрирование по вертикали
        height: '100vh', // Занять всю высоту экрана
      }}
    >
      <InterfaceForm />
      <CanvasPhoneFrame />
    </Box>
  );
};
