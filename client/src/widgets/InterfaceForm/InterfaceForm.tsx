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

// Доступные варианты жирности шрифта
const fontWeights = [
  { label: 'thin', value: '100' },
  { label: 'bold', value: '900' },
];

export const InterfaceForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { textStyle } = useSelector((state: RootState) => state.interface);

  const handleFontChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setTextStyle({ fontFamily: event.target.value as string }));
  };

  const handleFontWeightChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setTextStyle({ fontWeight: event.target.value as string }));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextStyle({ color: event.target.value }));
  };

  // 💾 Функция сохранения `canvas` через `multer`
  const handleSave = async () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('❌ Canvas не найден!');
      return;
    }

    // 🔥 Преобразуем `canvas` в Blob (файл)
    canvas.toBlob(async (blob) => {
      if (!blob) {
        console.error('❌ Ошибка при обработке canvas!');
        return;
      }

      // 🔥 Создаем `FormData`
      const formData = new FormData();
      formData.append('file', blob, 'canvas.png'); // 📌 Отправляем `canvas` как файл
      formData.append('fontFamily', textStyle.fontFamily);
      formData.append('fontWeight', textStyle.fontWeight);
      formData.append('color', textStyle.color);

      try {
        const response = await fetch('/api/interfaces/save', {
          method: 'POST',
          body: formData, // 🔥 Отправляем `FormData`, а не JSON
        });

        if (!response.ok) throw new Error('Ошибка при сохранении');

        console.log('✅ Canvas успешно сохранен!');
      } catch (error) {
        console.error('❌ Ошибка при сохранении canvas:', error);
      }
    }, 'image/png');
  };

  return (
    <Box sx={{ width: 300, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      {/* Выбор шрифта */}
      <InputLabel sx={{ color: 'white' }}>style</InputLabel>
      <Select
        value={textStyle.fontFamily}
        onChange={handleFontChange}
        fullWidth
        sx={{
          mt: 1,
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid white',
          '& .MuiSelect-icon': { color: 'white' }, // Иконка выбора
        }}
      >
        {fontFamilies.map((font) => (
          <MenuItem key={font} value={font}>
            {font}
          </MenuItem>
        ))}
      </Select>

      {/* Выбор жирности шрифта */}
      <InputLabel sx={{ mt: 2, color: 'white' }}>font boldness</InputLabel>
      <Select
        value={textStyle.fontWeight}
        onChange={handleFontWeightChange}
        fullWidth
        sx={{
          mt: 1,
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid white',
          '& .MuiSelect-icon': { color: 'white' },
        }}
      >
        {fontWeights.map((weight) => (
          <MenuItem key={weight.value} value={weight.value}>
            {weight.label}
          </MenuItem>
        ))}
      </Select>

      {/* Выбор цвета */}
      <InputLabel sx={{ mt: 2, color: 'white' }}>color</InputLabel>
      <input
        type="color"
        value={textStyle.color}
        onChange={handleColorChange}
        style={{
          width: '100%',
          height: '40px',
          backgroundColor: 'black',
          border: '1px solid white',
          cursor: 'pointer',
        }}
      />

      {/* Кнопка сохранения */}
      <Button
        variant="outlined" // Изменено на outlined для рамки
        fullWidth
        onClick={handleSave}
        sx={{
          mt: 2,
          backgroundColor: 'black', // Черный фон
          color: 'white', // Белый текст
          border: '1px solid white', // Белая рамка
          '&:hover': {
            backgroundColor: '#333', // Цвет при наведении
          },
        }}
      >
        add
      </Button>
    </Box>
  );
};
