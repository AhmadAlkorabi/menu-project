import React from 'react'
import { Row ,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';
const CardList = ({itemsData}) => {
  return (
    <Row>
    <Zoom>
    {
      itemsData.length >=1? (itemsData.map((item)=>{
        return (

            <Col key={item.id} sm='12' className='mb-2' style={{backgroundColor : '#F8F8FF8'}}>
            <Card className='d-flex flex-row'>
              <div><Card.Img className='img-item' variant="top" src={item.imgUrl} /></div>
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'> 
                <div className='item-title'>{item.title}</div>
                <div className='item-price'>{item.price}</div>
              </Card.Title>
    
              <div className='item-description'> <Card.Text className='py-2'>
                {item.description}
              </Card.Text>
            </div>
            </Card.Body>
        </Card>
        </Col>

        )



      })): <h3> dont have data</h3>




    }
    </Zoom>
    </Row>
  )
}

export default CardList