import { useEffect } from 'react'
import { Link } from 'wouter'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import { Close } from '../../components/icons'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    changeColor('white')
  }, [])

  return (
    <Layout>
      <div>
        <Link to='/texts'>
          <a className='fixed top-48 right-6 lg:right-16 lg:mt-3 hover:text-black block z-50'>
            <Close />
          </a>
        </Link>
      </div>
      <section className='fade-in px-6 lg:px-12 max-w-4xl m-auto pb-12'>
        <Title title={menu[lan][1].title} />

        <div className='mt-16'>
          <h1 className='text-xl lg:text-2xl mb-12 text-center px-12'>Primera Persona, 2022</h1>
          <p>
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
            fermentum posuere orci, sit amet sagittis sem elementum a. Donec et ante metus. In aliquet pulvinar ligula,
            vel pellentesque eros sollicitudin eu.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Index
