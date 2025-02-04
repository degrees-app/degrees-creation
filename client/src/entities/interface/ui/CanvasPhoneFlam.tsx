import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export const CanvasPhoneFrame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { textStyle, degrees, number1, number2 } = useSelector((state: RootState) => state.interface);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Очищаем canvas перед перерисовкой
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем фон (имитация экрана телефона)
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем границы телефона
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Устанавливаем шрифт и цвет для всех элементов
    ctx.fillStyle = textStyle.color;
    ctx.font = `18px ${textStyle.fontFamily}`;

    // Верхний левый угол (градусы)
    ctx.fillText(degrees, 20, 30);

    // Маленькие кружки (используем textStyle.color)
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(30 + i * 10, 40, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Верхний правый угол (числа)
    ctx.fillText(`${number1}°`, canvas.width - 50, 30);
    ctx.fillText(`${number2}°`, canvas.width - 50, 50);

    // Полый круг по центру (используем textStyle.color)
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height * 0.6, 25, 0, Math.PI * 2);
    ctx.strokeStyle = textStyle.color;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Линия под кругом (используем textStyle.color)
    ctx.fillRect(canvas.width * 0.1, canvas.height * 0.75, canvas.width * 0.8, 2);
  }, [textStyle, degrees, number1, number2]); // Обновляем canvas при изменении состояния

  return (
    <canvas ref={canvasRef} width={300} height={600} style={{ borderRadius: "40px", border: "2px solid white" }} />
  );
};
