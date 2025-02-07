import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../../app/store';
import {
  setBackgroundColor,
  setBrightness,
  setContrast,
  setBackgroundImage,
  setAnimationType,
  setAnimationColor,
} from '../../entities/background/model/backgroundSlice';
import { saveBackgroundData } from '../../entities/background/model/backgroundThunk';
import { Box, Button, InputLabel, Slider, Select, MenuItem } from '@mui/material';

export const BackgroundForm = () => {
  const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    backgroundColor,
    brightness,
    contrast,
    backgroundImage,
    animationType,
    animationColor,
  } = useSelector((state: RootState) => state.background);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 🎨 Изменение цвета фона
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBackgroundColor(event.target.value));
  };

  // 🖼 Обработка выбора файла
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      const objectURL = URL.createObjectURL(file);
      dispatch(setBackgroundImage(objectURL));
    }
  };

  // ❌ Удаление загруженного фото
  const handleRemovePhoto = () => {
    setSelectedFile(null);
    dispatch(setBackgroundImage(null));
  };

  // 📌 Открываем `input` для выбора фото
  const handleSelectPhoto = () => {
    fileInputRef.current?.click();
  };

  // 💾 Сохранение данных и переход на `/skins/background`
  const handleSave = async () => {
    const formData = new FormData();


    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    formData.append('backgroundColor', backgroundColor);
    formData.append('brightness', brightness.toString());
    formData.append('contrast', contrast.toString());
    formData.append('animationType', animationType);
    formData.append('animationColor', animationColor)

    console.log(formData.get('file'));

    await dispatch(saveBackgroundData(formData));
    // navigate('/skins/background')    ;
  };

  return (
    <Box sx={{ width: 300, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      {/* Выбор фото */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Button
        variant="outlined"
        fullWidth
        onClick={handleSelectPhoto}
        sx={{ mt: 1, mb: 1, color: 'white', borderColor: 'white' }}
      >
        Select a Photo
      </Button>
      {backgroundImage && (
        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={handleRemovePhoto}
          sx={{ mt: 1, mb: 1 }}
        >
          Remove Photo
        </Button>
      )}
      <InputLabel sx={{ mt: 2, color: 'white' }}>Animation Color</InputLabel>
      <input
        type="color"
        value={animationColor}
        onChange={(event) => dispatch(setAnimationColor(event.target.value))}
        style={{ width: '100%', height: '40px' }}
      />

      {/* Выбор цвета */}
      <InputLabel sx={{ color: 'white' }}>Background Color</InputLabel>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleColorChange}
        style={{ width: '100%', height: '40px' }}
      />

      {/* Выбор анимации */}
      <InputLabel sx={{ mt: 2, color: 'white' }}>Background Animation</InputLabel>
      <Select
        value={animationType}
        onChange={(event) => dispatch(setAnimationType(event.target.value))}
        fullWidth
        sx={{
          mt: 1,
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid white',
        }}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="rain">Rain</MenuItem>
        <MenuItem value="snow">Snow</MenuItem>
        <MenuItem value="blinkingDots">Blinking Dots</MenuItem>
      </Select>

      {/* Ползунки */}
      <InputLabel sx={{ mt: 2, color: 'white' }}>Brightness</InputLabel>
      <Slider
        value={brightness}
        onChange={(_, value) => dispatch(setBrightness(value as number))}
        min={0.5}
        max={2}
        step={0.1}
      />
      <InputLabel sx={{ mt: 2, color: 'white' }}>Contrast</InputLabel>
      <Slider
        value={contrast}
        onChange={(_, value) => dispatch(setContrast(value as number))}
        min={0.5}
        max={2}
        step={0.1}
      />

      {/* Кнопка сохранения */}
      <Button
        variant="outlined"
        fullWidth
        onClick={handleSave}
        sx={{
          mt: 2,
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid white',
          '&:hover': {
            backgroundColor: '#333', // Цвет при наведении
          },
        }}
      >
        ADD
      </Button>
    </Box>
  );
};
