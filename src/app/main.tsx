import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import Page from './page';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Page />
    <Footer />
  </StrictMode>
);
