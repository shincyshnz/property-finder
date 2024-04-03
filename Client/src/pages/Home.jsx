import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Title from '../components/shared/Title'

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
    </>
  )
}

export default Home