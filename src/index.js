import 'bootstrap/dist/css/bootstrap.min.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// TODO: fetch hobbies when rendering firts view, not when rendering Discover.
