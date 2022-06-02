import React from 'react'
import { Button } from 'antd'

function PopTemplate(props) {
    const {children,handleClose} = props
    return (
        <div>
            {children}
            <Button onClick={handleClose}>닫기</Button>
        </div>
    )
}

export default PopTemplate
