import { Outlet, useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
// import './globalStyles.css'; // Импортируем файл стилей

export default function SkinsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: 3 }}>
      {/* Заголовок страницы */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" textAlign="left" sx={{ flexGrow: 1 }}>
          skins.
        </Typography>
      </Box>

      {/* Панель навигации */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/ball')}
        >
          ball.
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/interface')}
        >
          interface.
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/backround')}
        >
          backround.
        </Typography>
        <Typography
          className="link" // Применяем класс для стилей
          onClick={() => handleNavigation('/skins/sound')}
        >
          sound.
        </Typography>
      </Box>

      {/* Здесь будет отображаться выбранный редактор */}
      <Box sx={{ border: '1px solid #ccc', padding: 3, borderRadius: 2, minHeight: 400 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
