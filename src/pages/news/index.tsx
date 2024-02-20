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
  const { data, loading } = useFetch(`/novedades/${lan}`)

  useEffect(() => {
    changeColor('white')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero ' + menu[lan][4].title
  }, [lan])

  if (loading) return <Loader color='#0047ab' />

  return (
    <section className='fade-in m-auto max-w-xl pb-12'>
      <Title title={menu[lan][4].title} />
      <div className='flex flex-col gap-y-12 mt-20 px-6'>
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
