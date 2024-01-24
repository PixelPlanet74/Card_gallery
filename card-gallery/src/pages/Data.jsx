import React from 'react'
import { Link } from 'react-router-dom'

const Data = () => {
    const value = `/products`
  return (
    <div>
<h1>Home Page</h1>
        <Link to={value}>Products</Link>
    </div>
  )
}

export default Data