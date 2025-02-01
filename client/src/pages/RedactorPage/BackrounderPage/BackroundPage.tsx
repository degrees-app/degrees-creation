import { BackroundForm } from '../../../widgets/BackroundForm/BackroundForm';
import { PhoneFrame } from '../../../entities/backround/ui/PhoneFlam';
import { Box } from '@mui/material';

export const BackroundPage = () => {

  return (
    <Box sx={{ display: 'flex', gap: 3, padding: 3 }}>
      <BackroundForm />
      <PhoneFrame />
    </Box>
  );
};
