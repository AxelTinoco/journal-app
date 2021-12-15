import React from 'react';
import ReactDOM from 'react-dom';

import { JournalApp } from './JournalApp';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <JournalApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

