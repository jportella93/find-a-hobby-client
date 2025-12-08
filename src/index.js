import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// TODO: fetch hobbies when rendering firts view, not when rendering Discover.
