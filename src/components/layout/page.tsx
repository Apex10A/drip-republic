// src/layout/MainLayout.tsx
import React from 'react';
import Header from '@/components/layout/header/page';
import Footer from '@/app/(landing-page)/footer/page'
import { LoadingProvider } from './loading-providers';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadingProvider>
      <div className="main-layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </LoadingProvider>
  );
};

export default MainLayout;