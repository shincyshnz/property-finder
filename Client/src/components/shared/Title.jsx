import React from 'react'

const Title = ({text, subText}) => {
  return (
    <div>
        <h1 className='text-4xl text-gray-700 mb-6'>{text}</h1>
        <h4 className='text-md font-light text-gray-600'>{subText}</h4>
    </div>
  )
}

export default Title