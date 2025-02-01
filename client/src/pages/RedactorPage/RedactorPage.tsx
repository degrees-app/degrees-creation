import { Outlet, useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';

export default function RedactorPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: 3 }}>
      {/* Заголовок страницы */}
      <Typography variant="h4" textAlign="center">
        Редактор
      </Typography>

      {/* Панель навигации */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" onClick={() => navigate('/redactor/ball')}>
          Ball
        </Button>
        <Button variant="contained" onClick={() => navigate('/redactor/interface')}>
          Interface
        </Button>
        <Button variant="contained" onClick={() => navigate('/redactor/backround')}>
          Backround
        </Button>
        <Button variant="contained" onClick={() => navigate('/redactor/sound')}>
          Sound
        </Button>
      </Box>

      {/* Здесь будет отображаться выбранный редактор */}
      <Box sx={{ border: '1px solid #ccc', padding: 3, borderRadius: 2, minHeight: 400 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
