import React, { Component, useState } from 'react'
import DefaultPage from '../components/templates/DefaultPage';
import ContentLayer from '../components/organisms/ContentLayer';
import { Input,Tag, Popover, Modal, Select } from 'antd';
import FormFieldSet from '../components/molecules/FormFieldSet';
import FormSearchLayer from '../components/organisms/FormSearchLayer';
import ListGrid from '../components/atoms/ListGrid';
import SearchPop from './SearchPop';
import GridFormDetail from './GridFormDetail';

function GridFormPageExample(props) {
    const {} = props
    const [searchPop, setSearchPop] = useState(false);

    const searchButton = [];
    const contentButton = [];

    const showDetail = (e) => {
      console.log('show detail');
    }

    const showSearchPop = () =>{
      setSearchPop(true);
    }

    const closeSearchPop = () =>{
      setSearchPop(false);
    }

    return (
        <div>
          <DefaultPage>
              <FormSearchLayer>
                  <FormFieldSet label="검색어1" name="t1" isRequied={true}>
                    <Input.Search onSearch={showSearchPop}/>
                  </FormFieldSet>
                  <Popover title="text" content={<SearchPop handleClose={closeSearchPop}/>} visible={searchPop} placement="bottom"/>
                  <FormFieldSet label="검색어22" name="t2"><Select/></FormFieldSet>
                  <FormFieldSet label="검색어3" name="t3"><Input/></FormFieldSet>
              </FormSearchLayer>
              <ContentLayer>
                  <ListGrid data={dataList}>
                      <Component field="name" title="Name" render={text => <a>{text}</a>}/>
                      <Component field="age" title="Age" />
                      <Component field="address" title="Adress"/>
                      <Component field="tags" title="Tags"/>
                      <Component field="action" title="Action" render= {() => <a onClick={showDetail}>action</a>} />
                  </ListGrid>
              </ContentLayer>
          </DefaultPage>
          <GridFormDetail/>
          
          <Modal
            title="그리드 상세보기(Popup)"
            visible={false}
            // onOk={this.handleOk}
            // onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>          
        </div>
    )
}

const dataList = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];   

export default GridFormPageExample
