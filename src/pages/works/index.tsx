import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Image from '../../components/Image'

const Index = () => {
  const { lan } = useDataContext()
  const [image, setImage] = useState(null)

  useEffect(() => {
    changeColor('primary')
  }, [])

  const data = [
    {
      id: 1,
      title: 'Primera Persona, 2022',
      image: 'https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Torre Ventanal, 2021',
      image: 'https://images.pexels.com/photos/3777933/pexels-photo-3777933.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Llevame a conocer el oceano, 2019',
      image: 'https://images.pexels.com/photos/3778205/pexels-photo-3778205.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Pasé todos estos años planeando un refugio, 2019',
      image: 'https://images.pexels.com/photos/3778897/pexels-photo-3778897.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <Layout>
      <section className='fade-in px-6 lg:px-12'>
        <Title title={menu[lan][0].title} />

        <div className='flex flex-col gap-y-2 text-center lg:text-xl mt-16'>
          {data.map(item => (
            <Link
              key={item.id}
              href={`/works/${item.id}`}
            >
              <a
                className='hover:line-through decoration-2'
                onMouseOver={() => setImage(item.image)}
                onMouseOut={() => setImage(null)}
              >
                {item.title}
              </a>
            </Link>
          ))}
        </div>
        {image && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
            <Image
              src={image}
              alt='image'
            />
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
