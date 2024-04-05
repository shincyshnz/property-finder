import React from 'react'

const Avatar = ({userData}) => {
  return (
    <div className="text-center w-8 h-8 rounded-full text-white font-semibold bg-yellow-900 bg-opacity-40">
        {userData?.firstName.slice(0,1)}
    </div>
  )
}

export default Avatar