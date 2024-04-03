import React from 'react'

const ErrorMessage = ({errorMsg}) => {
  return (
    <div className='text-red-600 text-[10px]'>
        <p className='p-1'>{errorMsg}</p>
    </div>
  )
}

export default ErrorMessage