import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button,Form } from 'antd';

export const {Item} = Form;



function FormSearchLayer(props) {
    const {children} = props

    const [form] = Form.useForm();

    const fields = [];
    
    if(Array.isArray(children)){
        children.forEach((item,index) =>{
            fields.push(<Col key={index}>{item}</Col>);
        })       
    }else{
        fields.push(<Col>{children}</Col>)
    }   

    const formItemLayout =
    {
        labelCol: {
            span: 10,
        },
        wrapperCol: {
            span: 15,
        },
    }    

    const onFinish = values => {
        console.log(values);
    };    

    return (
        <Form
            {...formItemLayout}
            layout="inline"   
            form={form}     
            onFinish={onFinish}
        >
            <Row gutter={24}>
                <Col>
                    <Row>
                        {fields}
                    </Row>
                </Col>
                <Col style={{textAlign:'right'}}><Button type="primary" htmlType="submit">검색</Button></Col>
            </Row>
            
        </Form>
    )
}

FormSearchLayer.propTypes = {

}



export default FormSearchLayer
