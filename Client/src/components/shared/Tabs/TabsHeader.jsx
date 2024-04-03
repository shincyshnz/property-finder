import React from 'react'
import WithContainer from '../HOC/Container'

const TabsHeader = ({...props}) => {

  return (
    <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Rent</a>
        </li>
    </ul>
  )
}

export default WithContainer(TabsHeader)