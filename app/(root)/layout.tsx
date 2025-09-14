import Navbar from '@/app/components/navbar';
import React from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}

export default Layout