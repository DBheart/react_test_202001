import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import DetailTemplate from '../components/templates/DetailTemplate'

function GridFormDetail(props) {
    const {...rest} = props

    return (
        <DetailTemplate>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </DetailTemplate>
    )
}

GridFormDetail.propTypes = {

}

export default GridFormDetail
