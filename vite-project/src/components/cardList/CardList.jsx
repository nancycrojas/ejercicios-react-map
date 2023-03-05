import { products } from '../../data/products';
import { Card } from '../card/Card';
import './CardList.css';

// const products = null
// const products = []

export const CardList = () => {
    // if(!products || !products.length){
    if(!products?.length){
        return <span>No hay productos, vuelva mas tarde</span>
    }
  return (
    <div>
      <h2>Ejercicio Products</h2>
      <div className='layout'>
        {products.map((product)=>(
            <Card key={product.id} product={product}/>
        ))}
    </div>
    </div>
  )
}


