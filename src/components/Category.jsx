import React from 'react'
import { Row ,Col} from 'react-bootstrap';
import Roll from 'react-reveal/Roll';
const Category = ({fliterCat , allCategory}) => {
  const onFilter= (cat)=>{fliterCat(cat) }
  return (
   <Row className='my-2 mb-5'>
    <Col sm='12' className='d-flex justify-content-center'> 
    <Roll>
      {allCategory.length >= 1  ? ( allCategory.map((cat)=>{
        return(
          <div >
          <button onClick={()=>onFilter(cat)}   className='a  mx-2 b p-2'> {cat}</button>
         
          
      </div>


        )
      }
      )):<h2>no category</h2>


      }
      </Roll>
       </Col>
   </Row>
  )
}

export default Category