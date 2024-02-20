import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    changeColor('primary')
  }, [])

  return (
    <Layout>
      <section className='text-2xl text-center flex justify-center items-center h-screen'>
        {lan === 'en' ? 'Page not found 🥲' : 'Página no encontrada 🥲'}
      </section>
    </Layout>
  )
}

export default Index
