import React from 'react'
import { Route,Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import Accessories from './Accessories';
import Electronics from './Electronics';
import Personal from './PersonalCare';
import Fashion from './Fashion';

const Products = () => {
  let match=useRouteMatch();
  console.log(match)
  return (
    <div>
      <Link to={`${match.url}/fashion`}>Fashion</Link>
      <Link to={`${match.url}/accessories`}>Accessories</Link>
      <Link to={`${match.url}/Electronics`}>Electronics</Link>
      <Link to={`${match.url}/personalcare`}>Personal Care</Link>

      {/* create route for the nested paths */}
      <Route path={`${match.path}/fashion`}component={Fashion}></Route>
      <Route path={`${match.path}/accessories`}component={Accessories}></Route>
      <Route path={`${match.path}/electronics`}component={Electronics}></Route>
      <Route path={`${match.path}/personalcare`}component={Personal}></Route>
    </div>
  )
}

export default Products