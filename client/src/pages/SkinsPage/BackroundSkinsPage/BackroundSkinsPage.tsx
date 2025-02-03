import { useEffect, useState } from "react";

export const BackroundSkinsPage = () => {
  const [backrounds, setBackrounds] = useState<
    { image: string; fontFamily: string; color: string; }[]
  >([]);

  useEffect(() => {
    const fetchBackrounds = async () => {
      const response = await fetch("/api/backround/getAll");
      const data = await response.json();
      setBackrounds(data);
    };

    fetchBackrounds();
  }, []);

  return (
    <div>
      <h2>Сохраненные фоны</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {backrounds.map((bg, index) => (
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


