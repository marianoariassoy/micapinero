import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    changeColor('primary')
  }, [])

  const data = [
    {
      id: 1,
      title: 'Primera Persona, 2022',
      url: 'https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Torre Ventanal, 2021',
      url: 'https://images.pexels.com/photos/3777933/pexels-photo-3777933.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Llevame a conocer el oceano, 2019',
      url: 'https://images.pexels.com/photos/3778205/pexels-photo-3778205.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Pasé todos estos años planeando un refugio, 2019',
      url: 'https://images.pexels.com/photos/3778897/pexels-photo-3778897.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <Layout>
      <section className='fade-in px-6 lg:px-12 m-auto pb-12'>
        <Title title={menu[lan][3].title} />

        <div className='flex flex-col gap-y-2 text-center lg:text-xl mt-16'>
          {data.map(item => (
            <a
              key={item.id}
              className='hover:line-through decoration-2'
              target='_blank'
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
