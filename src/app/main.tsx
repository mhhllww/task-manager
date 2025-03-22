import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Header } from '../widgets/header';

import Page from './page.tsx';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Page />
  </StrictMode>
);
