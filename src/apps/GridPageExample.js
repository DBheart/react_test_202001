import React from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../components/templates/DefaultLayout'
import SearchLayer from '../components/organisms/SearchLayer'
import ContentLayer from '../components/organisms/ContentLayer'
import DefaultPage from '../components/templates/DefaultPage'
import FiedlSet from '../components/molecules/FiedlSet'
import { Input } from 'antd'
import ListGrid from '../components/atoms/ListGrid'

function GridPageExample(props) {
    const {} = props

    const searchButton = [];
    const contentButton = [];

    return (
        <DefaultPage>
            <SearchLayer>
                <FiedlSet label="검색어1" isRequied={true}><Input/></FiedlSet>
                <FiedlSet label="검색어2"><Input/></FiedlSet>
                <FiedlSet label="검색어3"><Input/></FiedlSet>
                <FiedlSet label="검색어4"><Input/></FiedlSet>
            </SearchLayer>
            <ContentLayer>
                <ListGrid/>
            </ContentLayer>
        </DefaultPage>
    )
}

GridPageExample.propTypes = {

}

export default GridPageExample
