import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
// import App from './CRUD/App';

import './reset.css';
// import './styles/index.css';
import './styles.css';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
