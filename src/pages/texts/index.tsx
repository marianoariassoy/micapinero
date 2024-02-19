import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Categories from '../../components/Categories'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState('All')

  useEffect(() => {
    changeColor('primary')
  }, [])

  const categories = {
    en: [
      {
        name: 'All',
        code: 'All'
      },
      {
        name: 'Texts',
        code: 'Texts'
      },
      {
        name: 'Poetry',
        code: 'Poetry'
      },
      {
        name: 'Publications',
        code: 'Publications'
      }
    ],
    es: [
      {
        name: 'Todas',
        code: 'All'
      },
      {
        name: 'Textos',
        code: 'Texts'
      },
      {
        name: 'Poesía',
        code: 'Poetry'
      },
      {
        name: 'Publicaciones',
        code: 'Publications'
      }
    ]
  }

  const data = [
    {
      id: 1,
      title: 'Primera Persona, 2022',
      categoty: 'Texts'
    },
    {
      id: 2,
      title: 'Torre Ventanal, 2021',
      categoty: 'Texts'
    },
    {
      id: 3,
      title: 'Llevame a conocer el oceano, 2019',
      categoty: 'Texts'
    },
    {
      id: 4,
      title: 'Pasé todos estos años planeando un refugio, 2019',
      categoty: 'Texts'
    },
    {
      id: 5,
      title: 'Llevame a conocer el oceano, 2019',
      categoty: 'Poetry'
    },
    {
      id: 6,
      title: 'Torre Ventanal, 2021',
      categoty: 'Poetry'
    },
    {
      id: 7,
      title: 'Torre Ventanal, 2022',
      categoty: 'Poetry'
    },
    {
      id: 8,
      title: 'Pasé todos estos años planeando un refugio, 2019',
      categoty: 'Poetry'
    },
    {
      id: 9,
      title: 'Pasé todos estos años planeando un refugio, 2019',
      categoty: 'Poetry'
    },
    {
      id: 10,
      title: 'Primera Persona, 2022',
      categoty: 'Publications'
    },
    {
      id: 11,
      title: 'Torre Ventanal, 2021',
      categoty: 'Publications'
    },
    {
      id: 12,
      title: 'Llevame a conocer el oceano, 2019',
      categoty: 'Publications'
    }
  ]

  const filteredData = data.filter(item => category === 'All' || item.categoty === category)

  return (
    <Layout>
      <section className='fade-in px-6 lg:px-12 pb-12'>
        <Title title={menu[lan][1].title} />

        <Categories
          categories={categories[lan]}
          category={category}
          setCategory={setCategory}
        />

        <div className='flex flex-col gap-y-2 text-center lg:text-xl'>
          {filteredData.map(item => (
            <Link
              key={item.id}
              href={`/texts/${item.id}`}
            >
              <a className='hover:line-through decoration-2'>{item.title}</a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
