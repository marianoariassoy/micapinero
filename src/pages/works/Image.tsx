import { useEffect, useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

interface Props {
  src: string
  alt: string
}

const ImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [portrait, setPortrait] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      const { width, height } = image
      setPortrait(width < height)
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='w-full flex items-center justify-center h-[50vh]'>
      <SyncLoader color='#0047ab' />
    </div>
  ) : (
    <div className='flex justify-center'>
      <img
        src={src}
        alt={alt}
        className={`fade-in ${portrait ? 'h-[90vh]' : 'w-full'}`}
      />
    </div>
  )
}

export default ImageComponent
