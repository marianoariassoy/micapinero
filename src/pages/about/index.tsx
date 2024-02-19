import { useEffect, useState } from 'react'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Categories from '../../components/Categories'

const Index = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState('Bio')

  useEffect(() => {
    changeColor('primary')
  }, [])

  const categories = {
    en: [
      {
        name: 'Bio',
        code: 'Bio'
      },
      {
        name: 'CV',
        code: 'CV'
      },
      {
        name: 'Statement',
        code: 'Statement'
      }
    ],
    es: [
      {
        name: 'Bio',
        code: 'Bio'
      },
      {
        name: 'CV',
        code: 'CV'
      },
      {
        name: 'Declaración',
        code: 'Statement'
      }
    ]
  }

  return (
    <Layout>
      <section className='fade-in px-6 lg:px-12 pb-12'>
        <Title title={menu[lan][2].title} />

        <Categories
          categories={categories[lan]}
          category={category}
          setCategory={setCategory}
        />

        {category === 'Bio' && (
          <div className='max-w-3xl m-auto flex flex-col gap-y-6'>
            <div className='m-auto max-w-[280px]'>
              <Image
                src='./images/about.jpg'
                alt='image'
              />
            </div>
            <p className='lg:text-xl text-wrap'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lectus, ullamcorper eu dolor non,
              fermentum eleifend lectus. Donec est lectus, pellentesque vitae diam nec, laoreet gravida velit.
              Pellentesque cursus finibus lectus, nec lobortis quam molestie in. Aenean et tellus blandit, bibendum mi
              mattis, interdum dui. Ut a sollicitudin nunc, ac aliquet enim. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aliquam vestibulum arcu et massa dictum, congue egestas dui suscipit. Ut a orci in leo
              suscipit semper. Suspendisse eget ullamcorper dui. Aliquam in sapien finibus nibh elementum aliquam.
              Praesent imperdiet vulputate nisi ut mattis. Nunc vel mi in mauris maximus consectetur. Duis in turpis id
              metus volutpat posuere. Ut tincidunt facilisis arcu sed luctus. Aenean vitae purus pharetra tellus rutrum
              molestie ut sit amet turpis. Maecenas convallis tellus nec odio finibus mattis. Vivamus at neque finibus,
              sodales justo et, finibus nunc. Vivamus sodales enim id elit gravida, vel suscipit lacus lobortis. Integer
              fermentum posuere orci, sit amet sagittis sem elementum a. Donec et ante metus. In aliquet pulvinar
              ligula, vel pellentesque eros sollicitudin eu.
            </p>
          </div>
        )}
        {category === 'CV' && (
          <div className='max-w-3xl m-auto'>
            <p className='lg:text-xl text-wrap'>
              CV Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lectus, ullamcorper eu dolor non,
              fermentum eleifend lectus. Donec est lectus, pellentesque vitae diam nec, laoreet gravida velit.
              Pellentesque cursus finibus lectus, nec lobortis quam molestie in. Aenean et tellus blandit, bibendum mi
              mattis, interdum dui. Ut a sollicitudin nunc, ac aliquet enim. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aliquam vestibulum arcu et massa dictum, congue egestas dui suscipit. Ut a orci in leo
              suscipit semper. Suspendisse eget ullamcorper dui. Aliquam in sapien finibus nibh elementum aliquam.
              Praesent imperdiet vulputate nisi ut mattis. Nunc vel mi in mauris maximus consectetur. Duis in turpis id
              metus volutpat posuere. Ut tincidunt facilisis arcu sed luctus. Aenean vitae purus pharetra tellus rutrum
              molestie ut sit amet turpis. Maecenas convallis tellus nec odio finibus mattis. Vivamus at neque finibus,
              sodales justo et, finibus nunc. Vivamus sodales enim id elit gravida, vel suscipit lacus lobortis. Integer
              fermentum posuere orci, sit amet sagittis sem elementum a. Donec et ante metus. In aliquet pulvinar
              ligula, vel pellentesque eros sollicitudin eu.
            </p>
          </div>
        )}
        {category === 'Statement' && (
          <div className='max-w-3xl m-auto'>
            <p className='lg:text-xl text-wrap'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lectus, ullamcorper eu dolor non,
              fermentum eleifend lectus. Donec est lectus, pellentesque vitae diam nec, laoreet gravida velit.
              Pellentesque cursus finibus lectus, nec lobortis quam molestie in. Aenean et tellus blandit, bibendum mi
              mattis, interdum dui. Ut a sollicitudin nunc, ac aliquet enim. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aliquam vestibulum arcu et massa dictum, congue egestas dui suscipit. Ut a orci in leo
              suscipit semper. Suspendisse eget ullamcorper dui. Aliquam in sapien finibus nibh elementum aliquam.
              Praesent imperdiet vulputate nisi ut mattis. Nunc vel mi in mauris maximus consectetur. Duis in turpis id
              metus volutpat posuere. Ut tincidunt facilisis arcu sed luctus. Aenean vitae purus pharetra tellus rutrum
              molestie ut sit amet turpis. Maecenas convallis tellus nec odio finibus mattis. Vivamus at neque finibus,
              sodales justo et, finibus nunc. Vivamus sodales enim id elit gravida, vel suscipit lacus lobortis. Integer
              fermentum posuere orci, sit amet sagittis sem elementum a. Donec et ante metus. In aliquet pulvinar
              ligula, vel pellentesque eros sollicitudin eu.
            </p>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
