import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'

const Index = () => {
  const { lan } = useDataContext()

  const data = [
    {
      id: 1,
      title: 'Primera Persona, 2022',
      image: 'https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lectus, ullamcorper eu dolor non, fermentum eleifend lectus. Donec est lectus, pellentesque vitae diam nec, laoreet gravida velit. Pellentesque cursus finibus lectus, nec lobortis quam molestie in. Aenean et tellus blandit, bibendum mi mattis, interdum dui. Ut a sollicitudin nunc, ac aliquet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vestibulum arcu et massa dictum, congue egestas dui suscipit. Ut a orci in leo suscipit semper. Suspendisse eget ullamcorper dui. Aliquam in sapien finibus nibh elementum aliquam. Praesent imperdiet vulputate nisi ut mattis. Nunc vel mi in mauris maximus consectetur.'
    },
    {
      id: 2,
      title: 'Primera Persona, 2022',
      image: 'https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lectus, ullamcorper eu dolor non, fermentum eleifend lectus. Donec est lectus, pellentesque vitae diam nec, laoreet gravida velit. Pellentesque cursus finibus lectus, nec lobortis quam molestie in. Aenean et tellus blandit, bibendum mi mattis, interdum dui. Ut a sollicitudin nunc, ac aliquet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vestibulum arcu et massa dictum, congue egestas dui suscipit. Ut a orci in leo suscipit semper. Suspendisse eget ullamcorper dui. Aliquam in sapien finibus nibh elementum aliquam. Praesent imperdiet vulputate nisi ut mattis. Nunc vel mi in mauris maximus consectetur.'
    },
    {
      id: 3,
      title: 'Primera Persona, 2022',
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lectus, ullamcorper eu dolor non, fermentum eleifend lectus. Donec est lectus, pellentesque vitae diam nec, laoreet gravida velit. Pellentesque cursus finibus lectus, nec lobortis quam molestie in. Aenean et tellus blandit, bibendum mi mattis, interdum dui. Ut a sollicitudin nunc, ac aliquet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vestibulum arcu et massa dictum, congue egestas dui suscipit. Ut a orci in leo suscipit semper. Suspendisse eget ullamcorper dui. Aliquam in sapien finibus nibh elementum aliquam. Praesent imperdiet vulputate nisi ut mattis. Nunc vel mi in mauris maximus consectetur.'
    }
  ]

  useEffect(() => {
    changeColor('white')
  }, [])

  return (
    <Layout>
      <section className='fade-in m-auto max-w-xl pb-12'>
        <Title title={menu[lan][4].title} />

        <div className='flex flex-col gap-y-12 mt-16 px-6'>
          {data.map(item => (
            <article
              key={item.id}
              className='flex flex-col gap-y-6'
            >
              <div className='text-center'>{item.title}</div>
              {item.image && (
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              )}
              <div className='text-sm text-wrap'>{item.text}</div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
