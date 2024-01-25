import React from 'react'
import './MainPage.scss'
import { Header } from '../header/Header'
import { ProductList } from '../product-list/ProductList'
import { Footer } from '../footer/Footer'

export const MainPage = () => {
  return (
    <main>
      <Header/>
      <section className='background'>
        <img src='/assets/logos/background-logo.jpg' alt='Utopia Background'></img>
      </section>
      <ProductList/>
      <Footer/>
    </main>
  )
}
