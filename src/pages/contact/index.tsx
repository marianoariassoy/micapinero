import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/contacto/${lan}`)

  useEffect(() => {
    changeColor('primary')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero ' + menu[lan][5].title
  }, [lan])

  if (loading) return <Loader color='#FFFFFF' />

  return (
    <section className='fade-in px-6 lg:px-12 m-auto max-w-xl pb-12 text-center'>
      <Title title={menu[lan][5].title} />
      <div className='mt-20 lg:text-xl flex flex-col gap-y-12'>
        <a
          href='mailto:micaela.azul@gmail.com'
          className='hover:underline'
        >
          micaela.azul@gmail.com
        </a>

        {data.map(item => (
          <Item
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

export default Index
