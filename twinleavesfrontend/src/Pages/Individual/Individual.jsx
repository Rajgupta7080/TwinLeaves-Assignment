import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Individual.css'
const Individual = () => {
  const [product, setProductData] = useState({})
  let { id } = useParams()
  useEffect(() => {
    getdata()
  }, [])
  const getdata = async () => {
    let data = await fetch(
      `https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products`,
    )
    let res = await data.json()
    let obj = res.data.products?.find((elem) => {
      return elem.id === id
    })
    setProductData(obj)
  }
  console.log(product)
  if (Object.keys(product).length == 0) {
    return
  }
  return (
    <div id="indProductDiv">
      <div>
        <img id="image" src={product.images.top_left} alt="" />
      </div>

      <div id="Details">
        <p>Brand :- {product.brand}</p>
        <p>Main Category :- {product.main_category}</p>
        <p>Category :- {product.category_level_1}</p>
        <p>Description :- {product.derived_description} </p>
        <p>Price :- {product.mrp.mrp}</p>
        <p>Type :- {product.type}</p>
      </div>
    </div>
  )
}

export default Individual
