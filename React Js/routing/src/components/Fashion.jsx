import React from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import FashionProduct from './FashionProduct'

const Fashion = () => {
    let match=useRouteMatch()
    let productsData=[
        {
            id: 1,
            product:"men clothing",
        },
        {
            id: 2,
            product:"women clothing",
        },
        {
            id: 3,
            product:"kids clothing",
        }
    ]
  return (
    <div>
        {productsData.map((value)=>{
                return <Link to={`${match.url}/${value.id}`}>{value.product}</Link>
                                    //or
                        // <Link to={`${match.url}/${value.product}`}>{value.product}</Link>
        })}
        <Route path={`${match.path}/:id`}component={FashionProduct}></Route>
                                {/* or
        <Route path={`${match.path}/:product`}component={FashionProduct}></Route> */}
    </div>
  )
}

export default Fashion