import TitleNav from '../../Assets/Shared/TitleNav'
import ProductCard from './ProductCard'

function BestSelling({products}) {
  return (
    <div>
      <TitleNav name={"This Month"} title={'Best Selling Products'}/>
      <div className="flex flex-wrap justify-around">
       {
          products.slice(4,8).map((product) => (
            <ProductCard key={product.id} image={product.image} price={product.price} rating={product.rating.rate} title={product.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSelling