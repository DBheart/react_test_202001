import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col } from 'antd'

/**
 * 읽기 페이지였다가 수정페이지로 전환되는건 없나? ㅎㅎㅎㅎ
 * 그런거 만들고 싶다.
 * @param {*} props 
 */
function FormPage(props) {
    const {children,layout} = props
    const [form] = Form.useForm();

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
            layout={layout}   
            form={form}     
            onFinish={onFinish}
        >
            <Row gutter={24}>
                {fields}
            </Row>
        </Form>
    )
}

FormPage.propTypes = {
    layout:PropTypes.string,

}

FormPage.defaultProps = {
    layout:'horizontal'
}

export default FormPage
