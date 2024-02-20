import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Images = ({ id, lan }) => {
  const { data, loading } = useFetch(`/imagenes/${id}/${lan}`)

  if (loading) return <Loader color='#0047ab' />

  return (
    <div className='flex flex-col gap-y-12'>
      {data.map(item => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default Images
