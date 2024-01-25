import React from 'react'
import './ProductPage.scss'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { useLocation } from 'react-router-dom';

export const ProductPage = () => {

  const location = useLocation();
  const productData = location.state?.productData || {};

  return (
    <main>
        <Header/>
        <section className='product-detail'>
        <h2>Detalles del Producto</h2>
        <p>ID del Producto: {productData.id}</p>
        <p>Nombre: {productData.name}</p>
        <p>Precio: {'$ ' + productData.price?.toFixed(2)}</p>
      </section>
        <Footer/>
    </main>
  )
}
