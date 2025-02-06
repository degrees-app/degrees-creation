import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const CanvasPhoneFrame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { textStyle, degrees, number1, number2 } = useSelector(
    (state: RootState) => state.interface,
  );
  const { backgroundColor,
    brightness,
    contrast,
    backgroundImage, } = useSelector(
    (state: RootState) => state.background,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 🖼 Фон: картинка или цвет
    ctx.filter = `brightness(${brightness}) contrast(${contrast})`;
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    } else {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.filter = 'none';

    // 🔥 Границы экрана
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // 🎨 Шрифты и элементы
    ctx.fillStyle = textStyle.color;
    ctx.font = `${textStyle.fontWeight} 18px ${textStyle.fontFamily}`;
    ctx.fillText(degrees, 30, 50);

    // 🔥 Полые кружки (по аналогии с числами справа)
    ctx.fillText(`°`, canvas.width - 270, 80);
    ctx.fillText(`°`, canvas.width - 260, 80);
    ctx.fillText(`°`, canvas.width - 250, 80);

    // Верхний правый угол (числа)
    ctx.fillText(`${number1}°`, canvas.width - 80, 50);
    ctx.fillText(`${number2}°`, canvas.width - 55, 80);

    // 🔵 Полый круг в центре
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height * 0.5, 15, 0, Math.PI * 2);
    ctx.strokeStyle = textStyle.color;
    ctx.lineWidth = 6;
    ctx.stroke();

    // 🔥 Нижняя панель элементов
    const panelY = canvas.height - 100;
    const panelX = canvas.width / 2 - 95;
    ctx.lineWidth = 2;

    // 🔺 Треугольник "tocker"
    ctx.beginPath();
    ctx.moveTo(panelX - 20, panelY - 20); // Верхняя точка
    ctx.lineTo(panelX + 25, panelY + 10); // Правая нижняя точка
    ctx.lineTo(panelX - 20, panelY + 10); // Левая нижняя точка
    ctx.closePath();
    ctx.stroke();

    // Подпись "tocker" (ниже)
    ctx.fillText('tocker', panelX - 20, panelY + 30);

    // 📏 Слеш "/"
    ctx.beginPath();
    ctx.moveTo(panelX + 80, panelY + 10);
    ctx.lineTo(panelX + 110, panelY - 20);
    ctx.stroke();

    //кружок degree
    ctx.fillText(`O`, canvas.width - 165, 495);

    // Подпись "degree" (ниже)
    ctx.fillText('degree', panelX + 65, panelY + 30);

    // 🔘 Полый кружок с крестом "angles"
    ctx.beginPath();
    ctx.arc(panelX + 175, panelY, 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(panelX + 150, panelY - 10);
    ctx.lineTo(panelX + 200, panelY + 10);
    ctx.stroke();

    // Подпись "angles" (ниже)
    ctx.fillText('angles', panelX + 150, panelY + 30);
  }, [textStyle, degrees, number1, number2]); // Обновляем canvas при изменении состояния

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={600}
      style={{ borderRadius: '40px', border: '2px solid white' }}
    />
  );
};
