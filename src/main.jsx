import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { inject } from '@vercel/analytics';
 
inject();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);