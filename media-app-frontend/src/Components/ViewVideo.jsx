// eslint-disable-next-line no-unused-vars
import React from 'react'
import VideoCard from'./VideoCard'
import { Row,Col } from 'react-bootstrap'

function ViewVideo() {
  return (
    <div>
    <Row  className='p-5'>
     <Col>
     <VideoCard/>
     </Col>

     <Col>
     <VideoCard/>
     </Col>

     <Col>
     <VideoCard/>
     </Col>
     <Col>
     <VideoCard/>
     </Col>


      </Row>

    </div>
  )
}

export default ViewVideo