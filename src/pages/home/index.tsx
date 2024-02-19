import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'

import Layout from '../../layout/Layout'
import Image from '../../components/Image'

const Index = () => {
  useEffect(() => {
    changeColor('white')
  }, [])

  return (
    <Layout>
      <div className='w-screen h-screen'>
        <Image
          src='./temp/image.jpg'
          alt='image'
        />
      </div>
    </Layout>
  )
}

export default Index
