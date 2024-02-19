import { useEffect } from 'react'
import { Link } from 'wouter'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Image from '../../components/Image'
import { Close } from '../../components/icons'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    changeColor('white')
  }, [])

  const data = [
    {
      id: 1,
      title: 'Título Exhibition view',
      image: 'https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: '',
      image: 'https://images.pexels.com/photos/3777933/pexels-photo-3777933.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <Layout>
      <div>
        <Link to='/works'>
          <a className='fixed top-48 right-6 lg:right-16 lg:mt-3 hover:text-black block z-50'>
            <Close />
          </a>
        </Link>
      </div>
      <section className='fade-in px-6 lg:px-12 max-w-5xl m-auto pb-12'>
        <Title title={menu[lan][0].title} />

        <div className='mt-16'>
          <div className='text-center mb-12 px-12 lg:px-0'>
            <h1 className='text-xl lg:text-2xl'>Primera Persona, 2022</h1>
            <div className='flex flex-col '>
              <span>Solo exhibition at Constitución gallery, Buenos Aires, Arg.</span>
              <span>Curator: Nombre y Apellido </span>
              <span>Text: Nombre y Apellido</span>
            </div>
          </div>

          <div className='flex flex-col gap-y-12'>
            {data.map(item => (
              <article
                key={item.id}
                className='flex flex-col gap-y-3'
              >
                <div className='w-full'>
                  <Image
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                {item.title && <div className='text-sm text-center'>{item.title}</div>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
