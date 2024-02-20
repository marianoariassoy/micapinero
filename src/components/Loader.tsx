import SyncLoader from 'react-spinners/SyncLoader'

const Loader = ({ color }: { color: string }) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <SyncLoader color={color} />
    </div>
  )
}

export default Loader
