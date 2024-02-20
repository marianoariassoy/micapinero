import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/prensa/${lan}`)

  useEffect(() => {
    changeColor('primary')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero ' + menu[lan][3].title
  }, [lan])

  if (loading) return <Loader color='#FFFFFF' />

  return (
    <section className='fade-in px-6 lg:px-12 m-auto pb-12'>
      <Title title={menu[lan][3].title} />

      <div className='flex flex-col gap-y-2 text-center text-xl lg:text-2xl mt-20'>
        {data.map(item => (
          <a
            key={item.id}
            className='hover:underline'
            target='_blank'
            href={item.url}
          >
            {item.title}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Index
