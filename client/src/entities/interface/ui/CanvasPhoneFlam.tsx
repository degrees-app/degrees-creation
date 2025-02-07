import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const CanvasPhoneFrame = ({ phoneFrame }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef(new Image());
  // 🟢 Получаем данные из Redux

  // Вынести выше и принять пропсом
  const textStyle = useSelector((state: RootState) => state.interface.textStyle);
  const degrees = useSelector((state: RootState) => state.interface.degrees);
  const number1 = useSelector((state: RootState) => state.interface.number1);
  const number2 = useSelector((state: RootState) => state.interface.number2);
  const backgroundImage = useSelector(
    (state: RootState) => state.background.backgroundImage,
  );
  const backgroundColor = useSelector(
    (state: RootState) => state.background.backgroundColor,
  );

  useEffect(() => {
    if (backgroundImage) {
      imgRef.current.src = backgroundImage;
    }
  }, [backgroundImage]);

  const brightness = useSelector((state: RootState) => state.background.brightness);
  const contrast = useSelector((state: RootState) => state.background.contrast);
  const animationType = useSelector((state: RootState) => state.background.animationType); // ✅ Получаем анимацию
  const animationColor = useSelector(
    (state: RootState) => state.background.animationColor,
  ); // ✅ Получаем цвет анимации
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = `brightness(${brightness}) contrast(${contrast})`;

      if (backgroundImage) {
        ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      drawCanvasElements(ctx, canvas, { textStyle, degrees, number1, number2 });
      drawAnimation(ctx, animationType, animationColor); // Передаем animationColor

      // 🎨 1. Рисуем фон (изображение или цвет)
      // if (backgroundImage) {
      //   // const img = new Image();
      //   // img.src = backgroundImage;
      //   // imgRef.current.onload = () => {
      //   ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      //   drawCanvasElements(ctx, canvas, { textStyle, degrees, number1, number2 });
      //   drawAnimation(ctx, animationType, animationColor); // Передаем animationColor
      //   // };
      // } else {
      //   ctx.fillStyle = backgroundColor;
      //   ctx.fillRect(0, 0, canvas.width, canvas.height);
      //   drawCanvasElements(ctx, canvas, { textStyle, degrees, number1, number2 });
      //   drawAnimation(ctx, animationType, animationColor); // Передаем animationColor
      // }

      ctx.filter = 'none';
      requestAnimationFrame(draw); // 🔄 Обновляем анимацию
    };

    draw();
  }, [
    backgroundImage,
    backgroundColor,
    brightness,
    contrast,
    textStyle,
    degrees,
    number1,
    number2,
    animationType,
    animationColor,
  ]); // Добавляем animationColor в зависимости
  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={600}
      style={{ borderRadius: '40px', border: '2px solid white' }}
    />
  );
};

interface TextStyle {
  color: string;
  fontWeight: string;
  fontFamily: string;
}

// Определяем интерфейс для параметров
interface CanvasElementsProps {
  textStyle: TextStyle;
  degrees: string; // Предполагаем, что degrees - это строка
  number1: number | string; // Предполагаем, что number1 - это число
  number2: number | string; // Предполагаем, что number2 - это число
}
// 🎨 Функция отрисовки элементов (чтобы они были поверх фона)
const drawCanvasElements = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  {
    textStyle,
    degrees,
    number1,
    number2,
  }:  CanvasElementsProps
) => {
  // 🔲 Границы экрана
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 10;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // 🎨 Текстовые элементы
  ctx.fillStyle = textStyle.color;
  ctx.font = `${textStyle.fontWeight} 18px ${textStyle.fontFamily}`;
  ctx.fillText(degrees, 30, 50);

  // 🔥 Полые кружки (по аналогии с числами справа)
  ctx.fillText('°', canvas.width - 270, 80);
  ctx.fillText('°', canvas.width - 260, 80);
  ctx.fillText('°', canvas.width - 250, 80);

  // 🔥 Верхний правый угол (числа)
  ctx.fillText(`${number1}°`, canvas.width - 80, 50);
  ctx.fillText(`${number2}°`, canvas.width - 55, 80);

  // 🔵 Полый круг в центре
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height * 0.5, 15, 0, Math.PI * 2);
  ctx.strokeStyle = textStyle.color;
  ctx.lineWidth = 6;
  ctx.stroke();

  // 📏 Линия под центральным кругом
  ctx.fillRect(canvas.width * 0.1, canvas.height * 0.55, canvas.width * 0.8, 2);

  // 🔥 Нижняя панель элементов
  const panelY = canvas.height - 100;
  const panelX = canvas.width / 2 - 95;
  ctx.lineWidth = 2;

  // 🔺 Треугольник "tocker"
  ctx.beginPath();
  ctx.moveTo(panelX - 20, panelY - 20);
  ctx.lineTo(panelX + 25, panelY + 10);
  ctx.lineTo(panelX - 20, panelY + 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fillText('tocker', panelX - 20, panelY + 30);

  // 📏 Слеш "/"
  ctx.beginPath();
  ctx.moveTo(panelX + 80, panelY + 10);
  ctx.lineTo(panelX + 110, panelY - 20);
  ctx.stroke();
  ctx.fillText('degree', panelX + 65, panelY + 30);

  // 🔘 Полый кружок с крестом "angles"
  ctx.beginPath();
  ctx.arc(panelX + 175, panelY, 12, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(panelX + 150, panelY - 10);
  ctx.lineTo(panelX + 200, panelY + 10);
  ctx.stroke();
  ctx.fillText('angles', panelX + 150, panelY + 30);
};

// 🔥 Функция анимации (Дождь, Снег, Мигающие точки)
// 🔥 Функция анимации (Дождь, Снег, Мигающие точки)
const drawAnimation = (
  ctx: CanvasRenderingContext2D,
  animationType: string,
  animationColor: string,
) => {
  if (animationType === 'rain') {
    drawRain(ctx, animationColor);
  } else if (animationType === 'snow') {
    drawSnow(ctx, animationColor);
  } else if (animationType === 'blinkingDots') {
    drawBlinkingDots(ctx, animationColor);
  }
};

// 🌧 Анимация дождя
const drawRain = (ctx: CanvasRenderingContext2D, color: string) => {
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    ctx.strokeStyle = color; // Используем переданный цвет
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 2, y + 10);
    ctx.stroke();
  }
};

// ❄ Анимация снега
const drawSnow = (ctx: CanvasRenderingContext2D, color: string) => {
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    ctx.fillStyle = color; // Используем переданный цвет
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
};

// ✨ Мигающие точки
const drawBlinkingDots = (ctx: CanvasRenderingContext2D, color: string) => {
  for (let i = 0; i < 10; i++) {
    if (Math.random() > 0.5) continue;
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    ctx.fillStyle = color; // Используем переданный цвет
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
};
