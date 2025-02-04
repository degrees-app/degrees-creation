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
    <div>
      <h2>Сохраненные интерфейсы</h2>
      <div>
        {interfaces.map((intf, index) => (
          <div key={index}>
            <img src={`/img/${intf.image}`} alt="Saved Canvas" width={300} height={600} />
            <p>
              Шрифт: {intf.fontFamily}, Цвет: {intf.color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
