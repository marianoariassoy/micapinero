import Image from './Image'

const Item = ({ item }) => {
  return (
    <article
      key={item.id}
      className='flex flex-col gap-y-3'
    >
      <div className='w-full'>
        <Image
          src={item.image}
          alt={item.title}
        />
      </div>
      {item.title && <div className='text-center'>{item.title}</div>}
    </article>
  )
}

export default Item
