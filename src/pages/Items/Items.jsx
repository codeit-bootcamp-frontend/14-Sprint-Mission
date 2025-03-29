import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemsNavVar from './ItemsNavVar'
import BestItems from './BestItems'
import productService from '../../api/services/productService'

const Bone = styled.div`
  height: 75.375rem;
  width: 75rem;
  margin: 1.5rem auto;
`
const Items = () => {
  const [products, setProducts] = useState([])

  // 처음에 바로 실행하고 response.data를 setProducts 넣음
  useEffect(() => {
    productService.getProduct(1, 4, 'favorite', '').then((response) => {
      setProducts(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <ItemsNavVar />
      <Bone>
        <BestItems products={products} />
      </Bone>
    </>
  )
}

export default Items
