import { Link } from 'wouter'
import { Logo } from '../components/icons'

const Header = () => {
  return (
    <header className='fixed p-6 lg:py-10 lg:px-16 z-50 transition-colors'>
      <Link to='/'>
        <a className='logo transition-colors'>
          <Logo />
        </a>
      </Link>
    </header>
  )
}

export default Header
