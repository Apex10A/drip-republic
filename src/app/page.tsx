import React from 'react'
import Header from "@/components/layout/header/page"
import Home from "@/app/(landing-page)/home/page"
import Products from "@/app/(landing-page)/products/page"
import Values from '@/app/(landing-page)/values/page'
import Footer from '@/app/(landing-page)/footer/page'
import Subscribe from '@/app/(landing-page)/Subscribe/page'
import Reviews from '@/app/index'

const page = () => {
  return (
    <div>
      {/* <Header/>
      <Home/>
      <Values/>
      <Products/> */}
      <Reviews/>
      {/* <Subscribe/>
      <Footer/> */}
    </div>
  )
}

export default page