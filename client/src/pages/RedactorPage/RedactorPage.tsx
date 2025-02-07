import { Outlet, useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';

export default function RedactorPage() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: 3 }}>
      {/* Панель навигации */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/redactor/ball')}
        >
          ball°
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/redactor/background')}
        >
          background°
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/redactor/interface')}
        >
          interface°
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/redactor/sound')}
        >
          sound°
        </Typography>
      </Box>
      {/* Здесь будет отображаться выбранный редактор */}
      <Box sx={{ border: '1px solid #ccc', padding: 3, borderRadius: 2, minHeight: 400 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
