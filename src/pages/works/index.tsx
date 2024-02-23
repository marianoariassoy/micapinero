import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { changeColor } from '../../utils/utils'
import { menu } from '../../components/data'
import { useDataContext } from '../../context/useDataContext'
import Title from '../../components/Title'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const [image, setImage] = useState(null)
  const { data, loading } = useFetch(`/trabajos/${lan}`)

  useEffect(() => {
    changeColor('primary')
    const title = document.querySelector('title')
    title.innerHTML = 'Mica Piñero ' + menu[lan][0].title
  }, [lan])

  if (loading) return <Loader color='#FFFFFF' />

  const showImage = image => {
    setImage(image)
    const imagePreview = document.querySelector('.image-preview') as HTMLElement
    imagePreview.style.top = Math.floor(Math.random() * 60) + '%'
    imagePreview.style.left = Math.floor(Math.random() * 60) + '%'
  }

  return (
    <section className='fade-in px-6 lg:px-12'>
      <Title title={menu[lan][0].title} />

      <div className='flex flex-col gap-y-2 text-center text-xl lg:text-2xl mt-20'>
        {data.map(item => (
          <Link
            key={item.id}
            href={`/works/${item.id}`}
          >
            <a
              className='hover:underline'
              onMouseOver={() => showImage(item.image)}
              onMouseOut={() => setImage(null)}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </div>
      <div className='absolute h-[50vh] -z-10 image-preview'>
        {image && (
          <Image
            src={image}
            alt='image'
          />
        )}
      </div>
    </section>
  )
}

export default Index
