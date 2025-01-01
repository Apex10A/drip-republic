import React from 'react'
import Header from "@/components/layout/header/page"
import Home from "@/app/(landing-page)/home/page"
import Products from "@/app/(landing-page)/products/page"
import Values from '@/app/(landing-page)/values/page'

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Values/>
      <Products/>
    </div>
  )
}

export default page