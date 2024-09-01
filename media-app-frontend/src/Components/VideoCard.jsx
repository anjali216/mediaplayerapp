// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thenewsminute.com%2Fkerala%2Fking-kotha-review-dulquer-and-shabeer-shine-exhausting-gangster-saga-181502&psig=AOvVaw0Si9gKV8Buyuhn5B_rrvO3&ust=1725295294318000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjZtr-YoogDFQAAAAAdAAAAABAR "
      onClick={handleShow}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="danger"> <RiDeleteBinLine /> </Button>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        
  
    </div>
  )
}

export default VideoCard