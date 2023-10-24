import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, Colors, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer.ts';
import { BrowserRouter as Router } from 'react-router-dom';

const colors: Colors = {
  brand: {
    grey: "#878787",
    green: "#04A51E",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ colors, config });

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
      <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );