import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Title from '../components/shared/Title'
import TabsHeader from '../components/shared/Tabs/TabsHeader'
import TabsBody from '../components/shared/Tabs/TabsBody'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <section id='section-1'>
          <Title 
            text="Supercharge your search" 
            subText="Explore the most home listings in the UAE. With the most reliable information. All at your fingertips." 
          />
        </section>
        <section id='tabs'>
          <TabsHeader ContainerClassName='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700' >
            
            </TabsHeader>
        </section>
    </>
  )
}

export default Home