import './i18n'
import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
