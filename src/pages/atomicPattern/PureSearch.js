import React from 'react'
import { Layout, Divider, Row, Col } from 'antd'

function PureSearch() {
    return (
        <>
        <Layout>
            <Layout.Content>
                <Row>
                    <Col><label>input</label><input/></Col>
                    <Col><label>select</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </Col>
                    <Col><label>button</label>
                        <button>click</button>
                    </Col>
                    <Col><label>input button</label>
                        <input type="button" value="inputButton"/>
                        <input type="submit" value="summit"/>
                        <input type="reset" />
                    </Col>                    
                </Row>
                <Row>
                    <Col><label>checkbox</label>
                        <input type="checkbox" name="chk1"/>
                        <input type="checkbox" name="chk1"/>
                        <input type="checkbox" name="chk1"/>
                    </Col>
                    <Col><label>radio</label>
                        <input type="radio" name="rao1"/>
                        <input type="radio" name="rao1"/>
                        <input type="radio" name="rao1"/>
                    </Col>
                    <Col><label>file</label><input type="file"/></Col>
                    <Col><label>password</label><input type="password"/></Col>
                </Row>
                <Row>
                    <Col><label>날짜들</label>
                        <input type="date"/>
                        <input type="datetime-local"/>
                        <input type="month"/>
                        <input type="week"/>
                        <input type="time"/>
                    </Col>
                    <Col>
                        <label>number</label><input type="number"/>
                    </Col>
                </Row>             
                <Row>
                    <Col>
                        <label>input etc</label>
                        <input type="color" />
                        <input type="image" />
                        <input type="range" />                    
                    </Col>
                    <Col>
                        <label>input format etc</label>                    
                        <input type="email" />
                        <input type="search" />
                        <input type="tel" />
                        <input type="url" />
                    </Col>
                </Row>   

                <Row>
                    <Col span="10">
                        <lable>textarea</lable><textarea>text</textarea>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
        <Divider/>
        <Layout>
            <Layout.Content
                style={{
                    minHeight: 300,
                }}            
            >
                1. 직접입력
                    - 필요한 속성
                        - placehold : or display, 어떤 값인지 사용자에게 보여줄것
                        - disabled : 건들지 못하는것, 값 복사 불가
                        - readOnly : 입력못하는 것, 값 복사 가능
                        - value : 실제값
                        - width 
                        - height : textarea는 row에 해당한다.
                    - 이벤트    
                        - 값변경 : handleChanged 
                    - 대상 : input, textarea(input의 경우 type의 text,email , number, search,tel,url) 
                <hr/>
                2. 선택 입력
                    - 필요속성
                        - placehold : or display, 어떤 값인지 사용자에게 보여줄것
                        - disabled : 건들지 못하는것, 값 복사 불가
                        - readOnly : 입력못사는 것, 값 복사 가능
                        - value : 실제값, 선택된 값
                        - width 
                        - height : textarea는?    
                    - 이벤트 
                        - 선택변경 : handleChanged                   
                    - 대상 : select, input의 type이 date(기타 몇가지), checkbox, radio, file
                <hr/>    
                3. 클릭
                    - 필요속성
                        - placehold : or display, 어떤 값인지 사용자에게 보여줄것
                        - disabled : 건들지 못하는것, 값 복사 불가
                        - width 
                        - height : textarea는?        
                    - 이벤트 
                        - 클릭 이벤트 : handleClicked                
                    - 대상 : input의 button, submit, reset/ 진짜 button

                    
            </Layout.Content>
        </Layout>
        </>
        
    )
}

export default PureSearch
