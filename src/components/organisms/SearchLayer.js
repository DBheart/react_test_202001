import React from 'react'
import PropTypes from 'prop-types'
import FiedlSet from '../molecules/FiedlSet';
import { Input, Row, Col, Button } from 'antd';

/**
 * 버튼 설정 필요
 * @param {} props 
 */
function SearchLayer(props) {
    const {children} = props

    const fields = [];
    
    if(Array.isArray(children)){
        children.forEach((item,index) =>{
            fields.push(<Col key={index}>{item}</Col>);
        })       
    }else{
        fields.push(<Col>{children}</Col>)
    }   
    return (
        <Row>
            <Col>
                <Row>
                    {fields}
                </Row>
            </Col>
            <Col style={{textAlign:'right'}}><Button>검색</Button></Col>
        </Row>
    )
}

SearchLayer.propTypes = {

}

export default SearchLayer
