import { BackroundForm } from "../../../widgets/BackroundForm/BackroundForm";
import { PhoneFlam } from "../../../entities/backround/ui/CanvasPhoneFlam";
import { Box } from "@mui/material";

export const BackroundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        padding: 3,
        justifyContent: "center", // Центрирование по горизонтали
        alignItems: "center", // Центрирование по вертикали
        height: "100vh", // Занять всю высоту экрана
      }}
    >
      <BackroundForm />
      <PhoneFlam />
    </Box>
  );
};
