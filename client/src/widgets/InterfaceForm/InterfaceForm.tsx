import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { setTextStyle } from '../../entities/interface/model/interfaceSlice';
import { Box, Button, Select, MenuItem, InputLabel } from '@mui/material';


// Доступные стили шрифтов
const fontFamilies = [
  'Arial',
  'Courier New',
  'Georgia',
  'Times New Roman',
  'Verdana',
  'Comic Sans MS',
  'Impact',
  'Lucida Console',
  'Tahoma',
  'Trebuchet MS',
];

export const InterfaceForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { textStyle } = useSelector((state: RootState) => state.interface);

  const handleFontChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setTextStyle({ fontFamily: event.target.value as string }));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextStyle({ color: event.target.value }));
  };

  // 💾 Функция сохранения (canvas + стили)
  const handleSave = async () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) {
      alert('Canvas не найден!');
      return;
    }

    // Преобразуем canvas в base64
    const imageBase64 = canvas.toDataURL('image/png');

    // Отправляем на сервер
    try {
      const response = await fetch('/api/interface/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageBase64,
          fontFamily: textStyle.fontFamily,
          color: textStyle.color,
        }),
      });

      if (!response.ok) throw new Error('Ошибка при сохранении');

      alert('Изображение сохранено!');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось сохранить изображение');
    }
  };

  return (
    <Box sx={{ width: 300, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      {/* Выбор шрифта */}
      <InputLabel sx={{ color: 'white' }}>Стиль шрифта</InputLabel>
      <Select
        value={textStyle.fontFamily}
        onChange={handleFontChange}
        fullWidth
        sx={{ mt: 1, backgroundColor: 'white', color: 'black' }}
      >
        {fontFamilies.map((font) => (
          <MenuItem key={font} value={font}>
            {font}
          </MenuItem>
        ))}
      </Select>

      {/* Выбор цвета */}
      <InputLabel sx={{ mt: 2, color: 'white' }}>Цвет текста</InputLabel>
      <input
        type="color"
        value={textStyle.color}
        onChange={handleColorChange}
        style={{ width: '100%', height: '40px', border: 'none', cursor: 'pointer' }}
      />

      {/* Кнопка сохранения */}
      <Button variant="contained" fullWidth onClick={handleSave} sx={{ mt: 2 }}>
        Сохранить
      </Button>
    </Box>
  );
};
