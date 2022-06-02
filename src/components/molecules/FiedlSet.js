import React from 'react'
import PropTypes from 'prop-types'
import {CheckCircleTwoTone } from '@ant-design/icons';


function FiedlSet(props) {
    const {label,isRequied} = props;

    const fields = props.children;//1개의 칠드런밖에 안되는데? 어떻게 판단하는가?

    return (
        <>
            {isRequied?<CheckCircleTwoTone twoToneColor="red" />:''}<label>{label}</label>{fields}
        </>
    )
}

FiedlSet.propTypes = {
    children:PropTypes.node.isRequired,//1개일때는 object고 2개이상일때는 array로 넘어온다. 둘줄에 아무거나 될때는 node로 넣는다.
    label:PropTypes.string.isRequired
}

export default FiedlSet
