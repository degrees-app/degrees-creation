import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Box } from "@mui/material";

export const PhoneFrame = () => {
  const { text, textStyle } = useSelector((state: RootState) => state.backround);

  return (
    <Box
      sx={{
        width: 300,
        height: 600,
        borderRadius: "40px",
        border: "10px solid black",
        position: "relative",
        backroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <p style={{ ...textStyle, textAlign: "center" }}>{text}</p>
    </Box>
  );
};
