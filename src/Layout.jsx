import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>

  )
}

export default Layout
