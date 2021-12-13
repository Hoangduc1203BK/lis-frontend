import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductManager from './Components/Product.Manager'
function Product(){
    return (
        <div className="Product">
            <Switch>
                <Route component={ProductManager} />
            </Switch>
        </div>
    )
}

export default Product
