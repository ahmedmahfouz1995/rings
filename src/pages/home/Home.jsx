import React from 'react'
import Content from './../../Commponents/content/Content';
import Products from './../../Commponents/Products/Products';
import Slider from './../../Commponents/slider/slider';
import About from './../../Commponents/About/About';

export default function Home() {
  return (
    <>
      <About></About>
    <Slider></Slider>
    <Content></Content>
    <Products></Products>
    </>
  )
}
