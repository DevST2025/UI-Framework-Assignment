import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
// import { ProductCard } from '../components/Card'
import ListCard from '../components/ListCard'
// import NowShowing from '../components/NowShowing'

export default function HomePage() {
  return (
    <div>
        <Navbar />
        <Slider />
        <ListCard />
        {/* <NowShowing /> */}
    </div>
  )
}
