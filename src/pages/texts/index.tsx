import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Categories from '../../components/Categories'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState('all')
  const { data, loading } = useFetch(`/textos/${lan}`)

  useEffect(() => {
    changeColor('primary')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero ' + menu[lan][1].title
  }, [lan])

  const categories = {
    en: [
      {
        name: 'All',
        code: 'all'
      },
      {
        name: 'Texts',
        code: 'texts'
      },
      {
        name: 'Poetry',
        code: 'poetry'
      },
      {
        name: 'Publications',
        code: 'publications'
      }
    ],
    es: [
      {
        name: 'Todas',
        code: 'all'
      },
      {
        name: 'Textos',
        code: 'texts'
      },
      {
        name: 'Poesía',
        code: 'poetry'
      },
      {
        name: 'Publicaciones',
        code: 'publications'
      }
    ]
  }

  if (loading) return <Loader color='#FFFFFF' />

  const filteredData = data.filter(item => category === 'all' || item.category === category)

  return (
    <section className='fade-in px-6 lg:px-12 pb-12'>
      <Title title={menu[lan][1].title} />

      <Categories
        categories={categories[lan]}
        category={category}
        setCategory={setCategory}
      />

      <div className='flex flex-col gap-y-2 text-center text-xl lg:text-2xl'>
        {filteredData.map(item => (
          <Link
            key={item.id}
            href={`/texts/${item.id}`}
          >
            <a className='hover:underline'>{item.title}</a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Index
