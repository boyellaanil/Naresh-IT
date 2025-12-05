import React from 'react'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

const FashionProduct = () => {
    let match=useRouteMatch()
    console.log(match.params.id)
  return (
    <div>FashionProduct {match.params.id}</div>
  )
}

export default FashionProduct