import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { setText, setTextStyle } from '../../entities/backround/model/backroundSlice';
import { Box, TextField, Select, MenuItem } from '@mui/material';

export const BackroundForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { text, textStyle } = useSelector((state: RootState) => state.backround);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(e.target.value));
  };

  const handleFontSizeChange = (e: ChangeEvent<{ value: unknown }>) => {
    dispatch(setTextStyle({ fontSize: e.target.value as number }));
  };

  const handleFontWeightChange = (e: ChangeEvent<{ value: unknown }>) => {
    dispatch(setTextStyle({ fontWeight: e.target.value as 'normal' | 'bold' }));
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextStyle({ color: e.target.value }));
  };

  return (
    <Box sx={{ width: 300, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <TextField fullWidth label="Текст" value={text} onChange={handleTextChange} />

      <Select
        value={textStyle.fontSize}
        onChange={handleFontSizeChange}
        fullWidth
        sx={{ mt: 2 }}
      >
        {[12, 14, 16, 18, 20, 24, 30].map((size) => (
          <MenuItem key={size} value={size}>
            {size}px
          </MenuItem>
        ))}
      </Select>

      <Select
        value={textStyle.fontWeight}
        onChange={handleFontWeightChange}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="normal">Обычный</MenuItem>
        <MenuItem value="bold">Жирный</MenuItem>
      </Select>

      <input
        type="color"
        value={textStyle.color}
        onChange={handleColorChange}
        style={{ marginTop: '10px' }}
      />
    </Box>
  );
};
