import React, { ReactNode } from 'react';
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
