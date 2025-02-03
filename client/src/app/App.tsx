import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import RouterProvider from './router/RouterProvaider';
// import '../shared/ui/globalStyles.css'
function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* Делаем Redux store доступным для всего приложения */}
        {/* Настраиваем маршруты приложения */}
        <RouterProvider />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
