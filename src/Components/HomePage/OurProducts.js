import TitleNav from '../../Assets/Shared/TitleNav'
import ProductCard from './ProductCard';

function OurProducts({products}) {
  return (
    <div>
      <TitleNav name={"Our Product"} title={'Explore Our Products'}/>
      <div className="flex flex-wrap justify-around">
        {
          products.slice(0,4).map((product) => (
            <ProductCard key={product.id} image={product.image} price={product.price} rating={product.rating.rate} title={product.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default OurProducts