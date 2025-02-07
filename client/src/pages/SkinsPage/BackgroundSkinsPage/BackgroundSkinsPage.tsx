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



// в див передавать пропс из frame
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', justifyContent: 'center' }}>
      {backgrounds.map((intf, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={`/img/${intf.backgroundImage}`} alt="Saved Canvas" width={300} height={600} />
        </div>
      ))}
    </div>
  );
};
