import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className="landing-page-app-layout">
      {showHeader && <Header />}
      <main className={`landing-page-main-content ${showHeader ? 'has-header' : ''}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
