import { defineQuery } from "next-sanity";


export const allProducts = defineQuery ( `*[_type == "product"]{
    _id,
    name,
    title,
    type,
    "discount": discount,
    "discription":discription,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "price": price,
    tags,
    "category": category->title,
    "categorySlug": category->slug.current,    
  }`);