import { useEffect, useState } from "react";

export const InterfaceSkinsPage = () => {
  const [interfaces, setInterfaces] = useState<
    { image: string; fontFamily: string; color: string; }[]
  >([]);

  useEffect(() => {
    const fetchInterfaces = async () => {
      const response = await fetch("/api/interface/getAll");
      const data = await response.json();
      setInterfaces(data);
    };

    fetchInterfaces();
  }, []);

  return (
    <div>
      <h2>Сохраненные фоны</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {interfaces.map((bg, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img src={bg.image} alt="Saved" width={300} height={600} style={{ borderRadius: "40px" }} />
            <p style={{ fontFamily: bg.fontFamily, color: bg.color }}>
              Шрифт: {bg.fontFamily}, Цвет: {bg.color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


