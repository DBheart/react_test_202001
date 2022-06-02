import React, { Component } from 'react'
import { Input, Form, Button } from 'antd'
import ListGrid from '../components/atoms/ListGrid'
import PopTemplate from '../components/templates/PopTemplate';

function SearchPop(props) {
    const {handleClose} = props;
    return (
        <PopTemplate handleClose={handleClose}>
            <Form>
                <Form.Item label="검색1">
                    <Input.Search/>
                </Form.Item>
            </Form>
            <ListGrid>
                <Component field="code" title="code" />
                <Component field="name" title="name" />
            </ListGrid>
        </PopTemplate>
    )
}

export default SearchPop
