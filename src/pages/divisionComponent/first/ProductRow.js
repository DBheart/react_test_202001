import React, { PureComponent } from 'react'
import ProductCategoryRow from './ProductCategoryRow'

class ProductRow extends PureComponent {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color:'red'}}>
                {product.name}
            </span>;
            
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

export default ProductRow