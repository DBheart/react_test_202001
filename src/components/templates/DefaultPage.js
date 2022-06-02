import React from 'react'
import {Divider, Layout} from 'antd'
import 'antd/dist/antd.css';

function DefaultPage(props) {
    const {children} = props;


    return (
        <>
            <Layout style={{backgroundColor:'white',border:'1px solid gray',borderRadius:'8px',padding:'5px'}}>
                <Layout.Content>
                    {children[0]}
                </Layout.Content>        
            </Layout>
            <Divider/>
            <Layout>
                <Layout.Content>
                    {children[1]}
                </Layout.Content>        
            </Layout>
        </>        
    )
}

export default DefaultPage
