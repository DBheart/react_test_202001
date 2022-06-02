import React, { PureComponent } from 'react'

class SearchBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Seach..."/>
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

export default SearchBar