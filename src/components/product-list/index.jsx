import { useCallback, useEffect, useState } from 'react';
import './index.css'

const ProductList = () => {
  const [loading, setLoading] = useState(true)
  const [skip, setSkip] = useState(0)
  const [loadMoreHidden, setLoadMoreHidden] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    try {
      if (skip * 20 >= 80) {
        setLoadMoreHidden(true)
        return
      }
      const res = await fetch(`
        https://dummyjson.com/products?limit=20&skip=${skip === 0 ? 0 : skip * 20}&select=id,title,thumbnail,price
      `)
      const data = await res.json()
      setProducts([...products, ...data.products])
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }, [skip])

  useEffect(() => {
    getProducts()
  }, [skip])

  const handleLoadMore = () => {
    setSkip(skip + 1)
  }
  return (
    <ul className="product-list">
      {
        loading
        ?
        <p>Loading...</p>
        :
        <>
          {
            products.map(({ id, thumbnail, title, price }) => (
              <li key={id}>
                <img src={thumbnail} alt={`${title} thumbnail`} />
                <h3>{title} ${price}</h3>
              </li>
            ))
          }
          <li
            className="load-more"
            onClick={handleLoadMore}
            style={{
              display: loadMoreHidden ? 'none' : 'flex'
            }}
          >
            +
          </li>
        </>
      }
    </ul>
  )
}

export default ProductList
