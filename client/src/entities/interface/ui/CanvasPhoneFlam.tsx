import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const CanvasPhoneFrame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { textStyle, degrees, number1, number2 } = useSelector(
    (state: RootState) => state.interface
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Очищаем canvas перед перерисовкой
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем фон (имитация экрана телефона)
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем границы телефона
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Устанавливаем шрифт и цвет для всех элементов
    ctx.fillStyle = textStyle.color;
    ctx.font = `${textStyle.fontWeight} 18px ${textStyle.fontFamily}`;

    // Верхний левый угол (градусы)
    ctx.fillText(degrees, 30, 50);

    // 🔥 Полые кружки (по аналогии с числами справа)
    ctx.fillText(`°`, canvas.width -270, 80);
    ctx.fillText(`°`, canvas.width -260, 80);
    ctx.fillText(`°`, canvas.width -250, 80);

    // Верхний правый угол (числа)
    ctx.fillText(`${number1}°`, canvas.width - 80, 50);
    ctx.fillText(`${number2}°`, canvas.width - 55, 80);

    // Полый круг по центру (используем textStyle.color)
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height * 0.5, 15, 0, Math.PI * 2);
    ctx.strokeStyle = textStyle.color;
    ctx.lineWidth = 6;
    ctx.stroke();

    // Линия под кругом (используем textStyle.color)
    ctx.fillRect(0, canvas.height * 0.65, canvas.width, 3);

    // 🔥 Нижняя панель (поднята выше и центрирована)
    const panelY = canvas.height - 100; // Подняли выше
    const panelX = canvas.width / 2 - 95; // Центрируем панель

    ctx.lineWidth = 2; // 🔥 Сделал линии тоньше

    // 📌 1. Полый треугольник (tocker)
    ctx.beginPath();
    ctx.moveTo(panelX -20, panelY - 20); // Верхняя точка
    ctx.lineTo(panelX + 25, panelY + 10); // Правая нижняя точка
    ctx.lineTo(panelX - 20, panelY + 10); // Левая нижняя точка
    ctx.closePath();
    ctx.stroke();

    // Подпись "tocker" (ниже)
    ctx.fillText("tocker", panelX - 20, panelY + 30);

    // 📌 2. Слеш `/` (degree)
    ctx.beginPath();
    ctx.moveTo(panelX + 80, panelY + 10); // Начало слеша
    ctx.lineTo(panelX + 110, panelY - 20); // Конец слеша
    ctx.stroke();

    //кружок degree
    ctx.fillText(`O`, canvas.width -165, 495);

    // Подпись "degree" (ниже)
    ctx.fillText("degree", panelX + 65, panelY + 30);

    // 📌 3. Полый кружок, перечеркнутый слешами (angles)
    ctx.beginPath();
    ctx.arc(panelX + 175, panelY, 12, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(panelX + 150, panelY - 10); // Первый слеш
    ctx.lineTo(panelX + 200, panelY + 10);
    ctx.stroke();

    // Подпись "angles" (ниже)
    ctx.fillText("angles", panelX + 150, panelY + 30);
  }, [textStyle, degrees, number1, number2]); // Обновляем canvas при изменении состояния

  return (
    <canvas ref={canvasRef} width={300} height={600} style={{ borderRadius: '40px', border: '2px solid white' }} />
  );
};
