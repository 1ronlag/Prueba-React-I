import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

//importamos las images
import Danger from '../Assets/danger.gif'
import Death from '../Assets/Death.gif'
import Walter from '../Assets/walter.gif'

const Scene = () => {
    return (
        <>
            <Row>
                <Col className='slide-right'>
                    <h2 className='scene'>
                        My favorite Scene
                    </h2>
                </Col>
            </Row>

            <Row style={{textAlign:'center'}}>
                {/* Danger */}
                <Col xs={12} sm={12} md={4} lg={4} xl= {4}>
                    <Image className='scene-image' src={Danger}/>
                    <div className='scene-name'>I'm the Danger</div>
                    </Col>    
                            {/* Death */}
                    <Col xs={12} sm={12} md={4} lg={4} xl= {4}>
                    <Image className='scene-image' src={Death}/>
                    <div className='scene-name'>Gu's death</div>
                    </Col> 
                      {/* Walter */}
                    <Col xs={12} sm={12} md={4} lg={4} xl= {4}>
                    <Image className='scene-image' src={Walter}/>
                    <div className='scene-name'>Beginning</div>
                    </Col> 
              </Row>
        </>
    )
}

export default Scene