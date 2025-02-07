import { useEffect, useState } from 'react';

export const BackgroundSkinsPage = () => {
  const [backgrounds, setBackgrounds ] = useState([]);

  useEffect(() => {
    const fetchBackgrounds = async () => {
      const response = await fetch('/api/backgrounds/get');
      const data = await response.json();
      setBackgrounds(data);
    };
    

    fetchBackgrounds();
  }, []);
  type props = {backgroundImage: string // Путь к загруженному изображению
    backgroundColor: string, // HEX-код цвета фона
    brightness: number, // Значение яркости (от 0.5 до 2)
    contrast: number, // Значение контраста (от 0.5 до 2)
    animationType: string,
    animationColor: string}



  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', justifyContent: 'center' }}>
      {backgrounds.map((intf:props, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={`/img/${intf.backgroundImage}`} alt="Saved Canvas" width={300} height={600} />
        </div>
      ))}
    </div>
  );
};
