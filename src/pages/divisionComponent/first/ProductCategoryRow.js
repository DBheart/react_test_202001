import React, { PureComponent } from 'react'

class ProductCategoryRow extends PureComponent {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        )
    }
}

export default ProductCategoryRow