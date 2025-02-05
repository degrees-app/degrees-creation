import React from 'react';

export default function ErrorPage() {
  const handleRedirect = () => {
    window.location.href = '/'; // Перенаправление на главную страницу
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>Error Fatal</div>
      <button style={styles.button} onClick={handleRedirect}>
        go to Welcome
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  text: {
    color: 'white',
    fontSize: '48px',
    marginBottom: '20px', // Отступ между текстом и кнопкой
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: 'black', // Цвет кнопки
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
