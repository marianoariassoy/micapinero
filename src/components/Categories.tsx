const Categories = ({ categories, category, setCategory }) => {
  return (
    <div className='mb-10 mt-20 lg:mt-0 lg:mb-12 flex flex-wrap justify-center items-start gap-x-8 lg:gap-x-20  lg:text-2xl'>
      {categories.map((item, index) => (
        <button
          key={index}
          className={`decoration-2 ${category === item.code ? 'line-through' : 'hover:line-through'}`}
          onClick={() => setCategory(item.code)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default Categories
