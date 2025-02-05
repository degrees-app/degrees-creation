import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { setBackgroundColor, setBrightness, setContrast } from "../../entities/background/model/backgroundSlice";
import { saveBackground } from "../../entities/background/model/backgroundThunk"; // ✅ Теперь импортируем из санок
import { Box, Button, InputLabel, Slider } from "@mui/material";

export const BackgroundForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { backgroundColor, brightness, contrast } = useSelector((state: RootState) => state.background);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBackgroundColor(event.target.value));
  };

  const handleSave = () => {
    dispatch(saveBackground({ backgroundImage: null, backgroundColor, brightness, contrast })); // ✅ Корректный вызов санки
  };

  return (
    <Box sx={{ width: 300, padding: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <InputLabel sx={{ color: "white" }}>Цвет фона</InputLabel>
      <input type="color" value={backgroundColor} onChange={handleColorChange} style={{ width: "100%", height: "40px" }} />

      <InputLabel sx={{ mt: 2, color: "white" }}>Яркость</InputLabel>
      <Slider value={brightness} onChange={(_, value) => dispatch(setBrightness(value as number))} min={0.5} max={2} step={0.1} />

      <InputLabel sx={{ mt: 2, color: "white" }}>Контраст</InputLabel>
      <Slider value={contrast} onChange={(_, value) => dispatch(setContrast(value as number))} min={0.5} max={2} step={0.1} />

      <Button variant="contained" fullWidth onClick={handleSave} sx={{ mt: 2 }}>
        Сохранить фон
      </Button>
    </Box>
  );
};
