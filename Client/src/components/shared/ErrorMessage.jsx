import React from 'react'

const ErrorMessage = ({errorMsg}) => {
  return (
    <div className='text-red-600 text-sm'>
        <p className='p-1'>{errorMsg}</p>
    </div>
  )
}

export default ErrorMessage