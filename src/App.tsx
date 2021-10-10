import { PersistGate } from 'redux-persist/es/integration/react';
import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { ThemeProvider } from '@mui/material';
import theme from './themes';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <div>
                        <AppRoutes />
                    </div>
                </ThemeProvider>
            </PersistGate>
        </Provider>
  );
}

export default App;
