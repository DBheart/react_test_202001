import React, { PureComponent } from 'react'
import FiedlSet from '../../components/molecules/FiedlSet';
import { Input } from 'antd';

/**
 * SearchLayer와 ContentLayer은 거의 ByPass인데 어떻게 만들어야하는가?
 * 아래같이 들어가면 탭이 들어가든.. 안들어가든 상관이 없다.
 * css는 페이지 레이아웃에서 맞추는것으로 하자. 버튼마다의 css는 어떻게 할것인가? 특별한게 있으면 쓰고 없으면 안쓰는것으로..
 */
class SampleLayout extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    render() {
        const searchButton =[];
        const contentButton =[];
        return (
            <DefaultPage>
                <SearchLayer button={searchButton}>
                    <FiedlSet label="검색어1" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어2" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어3" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어4" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어5" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어6" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어7" isRequied={true}><Input/></FiedlSet>
                    <FiedlSet label="검색어8" isRequied={true}><Input/></FiedlSet>
                </SearchLayer>
                <ContentLayer button={contentButton}>
                    <Input.TextArea/>
                </ContentLayer>
            </DefaultPage>
        )
    }
}

export default SampleLayout