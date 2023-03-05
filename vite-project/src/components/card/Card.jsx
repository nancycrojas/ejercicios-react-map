import './Card.css';

export const Card = ({ product }) => {
  const { img,title,type,price,rating,onSale,isAvailable } = product
  return (
    <div className='card'>
        <div className='oferta'>
        {onSale && <div style={{ backgroundColor: 'red' }}>OFERTA</div>}
        </div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{type}</p>
        <span>${price}</span>
        <div>
            {[...Array(rating)].map((item, index) =>(<span key={index}>⭐️</span>))}
        </div>
        {/* {isAvailable ? <button style={{ backgroundColor: 'green' }}>ADD TO CART</button> : <button disabled style={{ backgroundColor: 'green' }}>ADD TO CART</button>} */}
        <button disabled={!isAvailable} style={{ backgroundColor: 'orange' }}>ADD TO CART</button>
    </div>
  );
};

// [...Array(5)]

// [...Array(rating)].map(() => ...)