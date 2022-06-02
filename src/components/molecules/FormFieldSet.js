import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

function FormFieldSet(props) {
    const {label,name,isRequied,emptyMessage,children} = props

    let rules = [];
    if(isRequied){
        rules = [{
              required: true,
              message: emptyMessage,
        },]
    }
    return (
        <Form.Item label={label} name={name} rules={rules}
        >{children}</Form.Item>
    )
}

FormFieldSet.propTypes = {
    children:PropTypes.node.isRequired,//1개일때는 object고 2개이상일때는 array로 넘어온다. 둘줄에 아무거나 될때는 node로 넣는다.
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    emptyMessage:PropTypes.string,
    isRequied:PropTypes.bool,
}

FormFieldSet.defaultProps ={
    emptyMessage:'Input something!',
    isRequied:false,    
}

export default FormFieldSet
