import React, { useEffect, useState } from 'react';

export default function MainPage() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = 'Welcome to Degrees° Creative platform';

  useEffect(() => {
    if (index < fullText.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Задержка в миллисекундах между буквами

      return () => clearInterval(intervalId); // Очистка интервала при размонтировании
    }
  }, [index, fullText]);

  return (
    <div style={styles.container}>
      {displayedText}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'white',
    fontSize: '48px',
    textAlign: 'center',
    // backgroundColor: 'black', // Добавим фон для лучшей видимости
  },
};