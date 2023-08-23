import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraBaseProvider, theme } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <React.StrictMode>
      <ChakraBaseProvider theme={theme}>
        <App/>
      </ChakraBaseProvider>
    </React.StrictMode>
  
)
