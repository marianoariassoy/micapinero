import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
