import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import RouterProvider from './router/RouterProvaider';

function App(): React.JSX.Element {
  return (
    // Обеспечиваем поддержку маршрутов
    <Provider store={store}>
      <BrowserRouter>
        {/* Делаем Redux store доступным для всего приложения */}
        {/* Настраиваем маршруты приложения */}
        <RouterProvider />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
