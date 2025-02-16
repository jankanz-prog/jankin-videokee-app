import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className="app-layout">
      {showHeader && <Header />}
      <main className={`main-content ${showHeader ? 'has-header' : ''}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
