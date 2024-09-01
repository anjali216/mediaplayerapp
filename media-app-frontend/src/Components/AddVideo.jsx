// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineCloudUpload } from "react-icons/md";
import { GrCloudUpload } from "react-icons/gr";
//import { addVideoAPI } from '../Services/AllAPIs';
//import Swal from 'sweetalert2'

function AddVideo() {

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="" onClick={handleShow}>
        <MdOutlineCloudUpload className='fs-3' />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><GrCloudUpload className='mx-2 fs-3' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill following details...</p>
          <div>
            <input  type="text" placeholder='Video Caption' className='form-control mb-3' />
            <input  type="text" placeholder='Video Image' className='form-control mb-3' />
            <input  type="text" placeholder='Video Url' className='form-control mb-3' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo