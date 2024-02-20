const Categories = ({ categories, category, setCategory }) => {
  return (
    <div className='mb-10 mt-20 lg:mt-0 lg:mb-12 flex flex-wrap justify-center items-start gap-x-8 lg:gap-x-20  text-xl lg:text-2xl'>
      {categories.map((item, index) => (
        <button
          key={index}
          className={`${category === item.code ? 'underline' : 'hover:underline'}`}
          onClick={() => setCategory(item.code)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default Categories
