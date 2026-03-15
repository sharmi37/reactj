import './Product.css';

function Product({data}) {
  return (
    <div className='product'>
     

        <img src={data.src} alt={data.name} className='product-1'/>
           <h3>{data.name}</h3>
        <h4>Price: ${data.prize}</h4>

        <button>Add to Cart</button>
    </div>
  );
}

export default Product;