import { languages } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Footer = () => {
  const { lan, toggleLanguage } = useDataContext()

  return (
    <footer className='fixed  bottom-6 right-6 lg:right-16 z-50'>
      <nav className='flex flex-col text-center'>
        {languages.map((item, index) => (
          <button
            className={`decoration-2 ${lan === item.code ? 'line-through' : 'hover:line-through '}`}
            key={index}
            onClick={() => toggleLanguage()}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
