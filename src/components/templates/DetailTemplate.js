import React from 'react'

import { Modal, Form, Button } from 'antd';

function DetailTemplate(props) {
    const {children,...rest} = props;

    const [form] = Form.useForm();
    const fields = [];
    if(Array.isArray(children)){
        children.forEach((item,index) =>{
            fields.push(<Form.Item key={index} label={item.label}>{item}</Form.Item>);
        })       
    }else{
        fields.push(<Form.Item label={children.label}>{children}</Form.Item>)
    }   

    return (
        <Modal {...rest}>
            <Form
                // {...formItemLayout}
                layout="inline"   
                form={form}     
                // onFinish={onFinish}            
            >
                {fields}
                <Button>취소</Button>
                <Button type="primary">저장</Button>
            </Form>
        </Modal>
    )
}

export default DetailTemplate
