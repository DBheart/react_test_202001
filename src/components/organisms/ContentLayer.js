import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Input, Button } from 'antd'

/**
 * 버튼 설정필요
 * @param {} props 
 */
function ContentLayer(props) {
    const {customButtons,isDefaultButton, children} = props

    //TODO 이벤트도 받아야함
    const buttons = [];
    if(isDefaultButton){
        buttons.push(<Button key={1}>추가</Button>);
        buttons.push(<Button key={2}>수정</Button>);
        buttons.push(<Button key={3}>삭제</Button>);
        buttons.push(<Button key={4}>엑셀</Button>);
    }else{
        buttons = customButtons;
    }
    return (
        <>
            <div style={{textAlign:"right"}}>
                {buttons}
            </div>
            
            {children}        
        </>
    )
}

ContentLayer.propTypes = {
    isDefaultButton : PropTypes.bool
}

ContentLayer.defaultProps = {
    isDefaultButton : true
}

export default ContentLayer
