import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import RouterProvider from './router/RouterProvaider';

function App(): React.JSX.Element {
  return (
    // Обеспечиваем поддержку маршрутов
    <BrowserRouter>
      {/* Делаем Redux store доступным для всего приложения */}
      <Provider store={store}>
        {/* Настраиваем маршруты приложения */}
        <RouterProvider />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
