import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import RouterProvider from './router/RouterProvaider';
import { SoundProvider } from '../pages/SoundContextPage/SoundContextPage';

// import '../shared/ui/globalStyles.css'
function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <SoundProvider>
        <Provider store={store}>
          {/* Делаем Redux store доступным для всего приложения */}
          {/* Настраиваем маршруты приложения */}
          <RouterProvider />
        </Provider>
      </SoundProvider>
    </BrowserRouter>
  );
}

export default App;
