import Banner from '@/components/home/Banner'
import Products from '@/components/home/Products'
import React from 'react'

export default function Home() {
  return (
    <div className='space-y-20'>
      
      <section className=''>
        <Banner></Banner>
      </section>


      <section>
        <Products></Products>
      </section>
    </div>
  )
}
