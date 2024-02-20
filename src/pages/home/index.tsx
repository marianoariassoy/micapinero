import { useEffect } from 'react'
import { changeColor } from '../../utils/utils'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/portada`)

  useEffect(() => {
    changeColor('white')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero'
  }, [])

  if (loading) return <Loader color='#0047ab' />

  return (
    <div className='w-screen h-screen'>
      <Image
        src={data[0].image}
        alt='image'
      />
    </div>
  )
}

export default Index
