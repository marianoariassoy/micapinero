const Item = ({ item }) => {
  return (
    <article className='flex flex-col gap-y-6'>
      <h1 className='text-center text-xl lg:text-2xl'>{item.title}</h1>
      {item.image && (
        <div>
          <img
            src={item.image}
            alt={item.title}
          />
        </div>
      )}
      <div className='text-wrap'>{item.text}</div>
    </article>
  )
}

export default Item
