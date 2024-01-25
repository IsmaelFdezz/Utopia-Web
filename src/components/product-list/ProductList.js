import { React, useState }  from 'react'
import { Link } from 'react-router-dom';
import './ProductList.scss'

export const ProductList = () => {

    const [hoveredProductId, setHoveredProductId] = useState(null);

    const products = [
        { 
            id: 'boxy-fit-white', 
            name: 'Boxy fit "Utopia" White', 
            price: 14500, 
            imageFront: '/assets/products/white-shirt.jpg', 
            imageBack: '/assets/products/white-shirt__back.jpg' 
        },
        { 
            id: 'boxy-fit-black', 
            name: 'Boxy fit "Utopia" Black', 
            price: 14500, 
            imageFront: '/assets/products/black-shirt.jpg', 
            imageBack: '/assets/products/black-shirt__back.jpg'
        }
    ]

    const handleMouseEnter = (productId) => {
        setHoveredProductId(productId);
    };
    
    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };
    
    
  return (
    <div className='products'>
        {
        products.map( product => (
            <Link 
                key={product.id} 
                className='products__item'
            >
                <div 
                    className='image-wrapper' 
                    onMouseEnter={() => handleMouseEnter(product.id)} 
                    onMouseLeave={handleMouseLeave}
                >
                    <img 
                        src={hoveredProductId === product.id ? product.imageBack : product.imageFront} 
                        alt={product.name}
                    />
                </div>
                <h3>{product.name}</h3>
                <p>{'$ ' + product.price.toFixed(2)}</p>
            </Link>
        ) )
        }
    </div>
  )
}
