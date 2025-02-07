import { Outlet, useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
// import './globalStyles.css'; // Импортируем файл стилей

export default function SkinsPage() {
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
          onClick={() => handleNavigation('/skins/ball')}
        >
          ball°
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/interface')}
        >
          interface°
        </Typography>
        {/* <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/background')}
        >
          background° */}
        {/* </Typography> */}
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/sound')}
        >
          sound°
        </Typography>
      </Box>
      <Box sx={{ border: '1px solid #ccc', padding: 3, borderRadius: 2, minHeight: 400 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
