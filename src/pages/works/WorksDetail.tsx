import { useEffect } from 'react'
import { Link, useParams } from 'wouter'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import { Close } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Images from './Images'

const Index = () => {
  const { lan } = useDataContext()
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/trabajos/${id}/${lan}`)

  useEffect(() => {
    changeColor('white')
  }, [])

  if (loading) return <Loader color='#0047ab' />

  const texts = {
    en: {
      curator: 'Curator',
      text: 'Text'
    },
    es: {
      curator: 'Curador',
      text: 'Texto'
    }
  }

  return (
    <section className='fade-in px-6 lg:px-12 pb-12'>
      <div>
        <Link to='/works'>
          <a className='fixed top-52 right-6 lg:right-16 lg:mt-3 hover:text-black block z-50'>
            <Close />
          </a>
        </Link>
      </div>
      <div>
        <Title title={menu[lan][0].title} />

        <div className='mt-20'>
          <div className='text-center mb-6 px-12 lg:px-0 max-w-4xl m-auto'>
            <h1 className='text-xl lg:text-3xl'>{data[0].title}</h1>
            <div className='flex flex-col lg:text-xl'>
              <span>{data[0].text}</span>
              {data[0].curator && (
                <span>
                  {texts[lan].curator}: {data[0].curator}
                </span>
              )}
              {data[0].worktext && (
                <span>
                  {texts[lan].text}: {data[0].worktext}
                </span>
              )}
            </div>
          </div>

          <Images
            id={data[0].id}
            lan={lan}
          />
        </div>
      </div>
    </section>
  )
}

export default Index
