import { Col } from 'react-bootstrap'

const SingleService = ({singleService}:any) => {
  const {id, title, text, icon} = singleService;
  return (
    <Col lg={4} md={6} sm={12} className='text-center'>
      <div className='d-flex justify-content-center'>
      {icon}
      </div>
      <h5>{title}</h5>
      <p>{text}</p>
    </Col>
  )
}

export default SingleService
