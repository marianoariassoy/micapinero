import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    changeColor('primary')
  }, [])

  const data = {
    en: [
      {
        id: 1,
        title: 'Constitución galería',
        text: `Del Valle Iberlucea 1140, Buenos Aires. CP 1160
        Thursday to Saturday from 14:30 to 19:30 hs.
        +549 1169378901 / +549 1138656162`,
        email: 'info@constitucion.com.ar'
      },
      {
        id: 2,
        title: 'UNA',
        text: `Tuesday to Friday 4pm to 7pm
        Saturday 10am to 7pm (and by appointment)
        +39 349 35 66 535`,
        email: 'info@unagalleria.com'
      }
    ],
    es: [
      {
        id: 1,
        title: 'Constitución galería',
        text: `Del Valle Iberlucea 1140, Buenos Aires. CP 1160
        Jueves a sábados de 14:30 a 19:30 hs.
        +549 1169378901 / +549 1138656162`,
        email: 'info@constitucion.com.ar'
      },
      {
        id: 2,
        title: 'UNA',
        text: `Jueves a Viernes de 4pm a 7pm
        Saturday 10am to 7pm (and by appointment)
        +39 349 35 66 535`,
        email: 'info@unagalleria.com'
      }
    ]
  }

  return (
    <Layout>
      <section className='fade-in px-6 lg:px-12 m-auto max-w-xl pb-12 text-center'>
        <Title title={menu[lan][5].title} />

        <div className='mt-16 lg:text-xl flex flex-col gap-y-12'>
          <a
            href='mailto:micaela.azul@gmail.com'
            className='hover:line-through decoration-2'
          >
            micaela.azul@gmail.com
          </a>

          {data[lan].map(item => (
            <article key={item.id}>
              <h2 className='uppercase'>{item.title}</h2>
              <p>{item.text}</p>
              <a
                href='mailto:{item.email}'
                className='hover:line-through decoration-2'
              >
                {item.email}
              </a>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
