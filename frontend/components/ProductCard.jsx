import React from 'react'
import Link from 'next/link'

function ProductCard() {
  return (
    <Link href="/product/1">
          <img className='w-full' src="/product-1.webp" alt="Product Image"/>
    </Link>
  )
}

export default ProductCard
