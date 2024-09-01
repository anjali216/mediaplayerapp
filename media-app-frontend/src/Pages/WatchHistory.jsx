// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { FaFastBackward } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
//import { deleteHistoryAPI, getHistoryAPI } from '../Services/AllAPIs'


function WatchHistory() {

  // //const [history,setHistory] = useState([])
  // const [deleteStatus,setDeleteStatus]=useState("")
  // const getWatchHistory =async() => {
  //     const response = await getHistoryAPI()
  //     console.log(response.data);
  //     setHistory(response.data)
  // }

  // //const handleDelete = async(id)=>{
  //     const response = await deleteHistoryAPI(id)
  //     console.log(response);
  //     setDeleteStatus(response)
  // }


  // useEffect(()=>{
  //   getWatchHistory()
  // },[deleteStatus])



  return (
    <div>
      <Row >
        <Col className='mt-5'>
        <h3>Watch History</h3>
        </Col>
        <Col className='me-3'>
        <Link to={'/'}>
        <h5 style={{float:'right'}}>Back to Home <FaFastBackward /></h5> 
        </Link>
        </Col>
      </Row>

      <Row className='p-5'>
      <table className='border border-white'>
      <thead>
        <tr className='border border-white'>
          <th className='border border-white'>SLno</th>
          <th className='border border-white'>Caption</th>
          <th className='border border-white'>URL</th>
          <th className='border border-white'>Timestamp</th>
          <th className='border border-white'>Action</th>
        </tr>
      </thead>
      <tbody>
       
      
          <tr className='border border-white'>
          <td className='border border-white text-center'>1</td>
          <td className='border border-white text-center'>item</td>
          <td className='border border-white '>embedLink</td>
          <td className='border border-white text-center'>timestamp</td>
          <td className='border border-white text-center'>
            <i  className='btn btn-danger  fa-solid fa-trash text-white m-3' > <RiDeleteBinLine /> </i>
          </td>
        </tr>
        
 
      </tbody>
    </table>
      </Row>
    </div>
  )
}

export default WatchHistory
