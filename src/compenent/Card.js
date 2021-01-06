import React from 'react'
import {Card} from 'react-bootstrap'

const Carde =({el})=>{
    return(
        <Card
        bg='warning'
        
        text={'warning' === 'light' ? 'dark' : 'white'}
        style={{ width: '350px' }}
        className="mb-2"
      >
        <Card.Header>{el.username}</Card.Header>
        <Card.Body>
          <Card.Title> {el.name} </Card.Title>
          <Card.Text>
            {el.email}
          </Card.Text>
          <Card.Text>
          {el.address.street} , {el.address.city} 
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Carde