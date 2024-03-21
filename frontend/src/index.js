import React from 'react';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter} from "react-router-dom";

// Import createRoot from "react-dom/client" instead of "react-dom"
import { createRoot } from "react-dom/client";
import ChatProvider from './Context/ChatProvider';

// Use createRoot instead of ReactDOM.createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>
);