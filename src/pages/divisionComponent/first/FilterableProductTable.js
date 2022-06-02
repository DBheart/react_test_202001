import React, { PureComponent } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import products from './first.json'
import './first.css'

class FilterableProductTable extends PureComponent {

    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable products={products}/>
            </div>
        )
    }
}

export default FilterableProductTable