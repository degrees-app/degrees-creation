import { useEffect, useState } from 'react';

export const InterfaceSkinsPage = () => {
  const [interfaces, setInterfaces] = useState([]);

  useEffect(() => {
    const fetchInterfaces = async () => {
      const response = await fetch('/api/interfaces/get');
      const data = await response.json();
      setInterfaces(data);
    };

    fetchInterfaces();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', justifyContent: 'center' }}>
      {interfaces.map((intf, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={`/img/${intf.image}`} alt="Saved Canvas" width={300} height={600} />
        </div>
      ))}
    </div>
  );
};
