import React, { PureComponent } from 'react'

class PureState extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            value:'',
        }
    }

    handleChange = (event) =>{
        
        const value = event.target.value;
        console.log(value);

        this.setState({
            value: value,
        });        
    }
    render() {
        const {value} = this.state;

        return (
            <div>
                <span>pureState : </span>
                <input onChange={this.handleChange}/>
                <span>changeValue :{value}</span>
            </div>
        )
    }
}

export default PureState