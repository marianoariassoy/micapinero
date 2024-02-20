import { useEffect } from 'react'
import { Link, useParams } from 'wouter'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import { Close } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TextHTML from '../../components/useHTML'

const Index = () => {
  const { lan } = useDataContext()
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/textos/${id}/${lan}`)

  useEffect(() => {
    changeColor('white')
  }, [])

  if (loading) return <Loader color='#0047ab' />

  return (
    <section className='fade-in px-6 lg:px-12 max-w-4xl m-auto pb-12'>
      <div>
        <Link to='/texts'>
          <a className='fixed top-52 right-6 lg:right-16 lg:mt-3 hover:text-black block z-50'>
            <Close />
          </a>
        </Link>
      </div>
      <div>
        <Title title={menu[lan][1].title} />
        <div className='mt-20'>
          <h1 className='text-2xl lg:text-3xl mb-6 text-center px-12'>{data[0].title}</h1>
          <TextHTML text={data[0].text} />
        </div>
      </div>
    </section>
  )
}

export default Index
