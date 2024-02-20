const Item = ({ item }) => {
  return (
    <article key={item.id}>
      <h2 className='uppercase'>{item.title}</h2>
      <p>{item.text}</p>
      <a
        href='mailto:{item.email}'
        className='hover:underline'
      >
        {item.email}
      </a>
    </article>
  )
}

export default Item
