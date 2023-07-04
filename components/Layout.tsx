import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="m-12">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
