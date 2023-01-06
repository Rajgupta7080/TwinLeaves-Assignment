import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import './Product.css'
const Product = () => {
  const [productData, setData] = useState([])
  useEffect(() => {
    getdata()
  }, [])
  const getdata = async () => {
    let res = await fetch(
      `https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products`,
    )
    let data = await res.json()
    setData(data.data.products.splice(0, 18))
  }

  const handlesort = (e) => {
    let selected = e.target.value

    if (selected === 'asc') {
      productData.sort((a, b) => {
        return a.mrp.mrp - b.mrp.mrp
      })
    }
    if (selected === 'des') {
      productData.sort(function (a, b) {
        return b.mrp.mrp - a.mrp.mrp
      })
    }

    setData([...productData])
  }

  const handlefilter = (e) => {
    let selected = e.target.value
    let filterarr = []
    if (selected == 'Diapers & Wipes') {
      filterarr = productData.filter((el) => {
        if (el.category_level_1 == 'Diapers & Wipes') {
          return el
        }
      })
    }
    if (selected == 'Feeding & Nursing') {
      console.log('Hello')
      filterarr = productData.filter((el) => {
        if (el.category_level_1 == 'Feeding & Nursing') {
          return el
        }
      })
    }
    setData([...filterarr])
  }
  return (
    <>
      <select onChange={handlesort} name="" id="">
        <option value="all">Sort by Price</option>
        <option value="asc">low to high</option>
        <option value="des">high to low</option>
      </select>
      <select onChange={handlefilter} name="" id="">
        <option value="all">Sort by Filter</option>
        <option value="Diapers & Wipes">Diapers & Wipes</option>
        <option value="Feeding & Nursing">Feeding</option>
      </select>

      <div id="mainDiv">
        {productData?.map((el) => (
          <NavLink id="nav" to={`/products/${el.id}`}>
            <div key={el.id} className="product">
              <img
                src={el.images.top_left}
                height="200px"
                width="200px"
                alt=""
                srcset=""
              />
              <p>{el.name}</p>
              <p>₹{el.mrp.mrp}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Product
