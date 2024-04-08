import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/Breadcrums/BreadCrum';
import ProductDisplay from '../Components/productdisplay/ProductDisplay';
import DiscriptionBox from '../Components/descriptionbox/DiscriptionBox'
import RelatedProducts from '../Components/relatedproducts/RelatedProducts';

const Product = () => {
  const {all_product }=useContext(ShopContext);
  const {productID} = useParams();
  const product = all_product.find((e)=>e.id===Number(productID));

  return (
    <div>
      <BreadCrum product={product}></BreadCrum>
      <ProductDisplay product={product}></ProductDisplay>
      <DiscriptionBox></DiscriptionBox>
      <RelatedProducts></RelatedProducts>
      
    </div>
  )
}

export default Product