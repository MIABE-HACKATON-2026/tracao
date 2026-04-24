import React from 'react'
import Header from '../components/organisms/common/Header'
import Footer from '../components/organisms/common/Footer'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout