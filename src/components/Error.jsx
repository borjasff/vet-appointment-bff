const Error = ({children}) => {
  return (
    <div className='bg-red-800 uppercase text-center text-white p-3 font-bold mb-3 rounded-md'>
        {children}
    </div> 
  )
}

export default Error