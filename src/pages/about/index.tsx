import { useEffect, useState } from 'react'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Categories from '../../components/Categories'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TextHTML from '../../components/useHTML'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState('bio')
  const { data, loading } = useFetch(`/nosotros/${lan}`)

  useEffect(() => {
    changeColor('primary')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero ' + menu[lan][2].title
  }, [lan])

  if (loading) return <Loader color='#FFFFFF' />

  const categories = {
    en: [
      {
        name: 'Bio',
        code: 'bio'
      },
      {
        name: 'CV',
        code: 'CV'
      },
      {
        name: 'Statement',
        code: 'statement'
      }
    ],
    es: [
      {
        name: 'Bio',
        code: 'bio'
      },
      {
        name: 'CV',
        code: 'CV'
      },
      {
        name: 'Declaración',
        code: 'statement'
      }
    ]
  }

  return (
    <section className='fade-in px-6 lg:px-12 pb-12 max-w-3xl m-auto'>
      <Title title={menu[lan][2].title} />

      <Categories
        categories={categories[lan]}
        category={category}
        setCategory={setCategory}
      />

      {category === 'bio' && (
        <article className='w-full flex flex-col gap-y-6'>
          {data[0].image && (
            <div className='m-auto max-w-[280px]'>
              <Image
                src={data[0].image}
                alt='Imagen de perfil'
              />
            </div>
          )}
          <TextHTML text={data[0].text} />
        </article>
      )}
      {category === 'CV' && (
        <article>
          <TextHTML text={data[1].text} />
        </article>
      )}
      {category === 'statement' && (
        <article>
          <TextHTML text={data[2].text} />
        </article>
      )}
    </section>
  )
}

export default Index
