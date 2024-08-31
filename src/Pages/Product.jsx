import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DiscriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) return <div>Product not found</div>; // Adding a fallback in case product is not found


  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};
