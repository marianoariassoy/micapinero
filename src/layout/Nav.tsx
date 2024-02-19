import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Nav = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  return (
    <nav className='fixed p-6 lg:py-10 lg:px-16 right-0 z-50 transition-colors flex flex-col text-center'>
      {menu[lan].map((item, index) => (
        <Link
          key={index}
          href={item.url}
        >
          <a className={`decoration-2 ${location === item.url ? 'line-through' : 'hover:line-through'}`}>
            {item.title}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
