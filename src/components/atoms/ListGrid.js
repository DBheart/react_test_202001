import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col, Table, Tag, Button } from 'antd'

/**
 * 로우클릭할때 현재 데이터를 선택하도록 하는게 좋겠다.
 * 근데.. 로우클릭과 체크박스 클릭은 어떻게 안겹치게 안되나?
 * @param {} props 
 */
function ListGrid(props) {
    const {data,children} = props

    console.log(children)
    const columns = [];

    if(Array.isArray(children)){
      children.forEach(child =>{
        const item ={};
        item.key = child.props.field;
        item.dataIndex = child.props.field;
        item.title = child.props.title;
        item.render = child.props.render;

        columns.push(item);
      })
    }else{
      if(children){
        const item ={};
        item.key = children.props.field;
        item.dataIndex = children.props.field;
        item.title = children.props.title;
        item.render = children.props.render;
  
        columns.push(item);      
      }
    }    

    const checkedRow = (selectedRowKeys, selectedRows) =>{
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      // event.stopPropagation()
    }

    const rowClick = (selecteValue) =>{
      //체크박스에서는 안되게 하는 방법이 없나?
      console.log(selecteValue);
    }

              
    return (
        <Layout>
            <Row>
                <Col>
                    <Table 
                      rowSelection = {{
                        type: 'radio',//radio,checkbox
                        onChange:checkedRow,
                      }}
                      onRow={(record, rowIndex) => {
                        return {
                          // onClick: (event) => {rowClick(record); }, // click row
                          onDoubleClick: (event) => {}, // double click row
                          onContextMenu: (event) => {}, // right button click row
                          onMouseEnter: (event) => {}, // mouse enter row
                          onMouseLeave: (event) => {}, // mouse leave row
                        };
                      }}
                      rowClassName={() => 'editable-row'} columns={columns} dataSource={data} bordered/>
                </Col>
            </Row>
        </Layout>        
    )
}

ListGrid.propTypes = {

}

export default ListGrid
