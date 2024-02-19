import { useEffect, useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

interface Props {
  src: string
  alt: string
}

const ImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full flex justify-center items-center'>
      <SyncLoader color='#0047ab' />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='fade-in h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
