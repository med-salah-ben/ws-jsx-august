import React from 'react'
import {Card , Button} from "react-bootstrap"

const Adventure = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg" />
      <Card.Body>
        <Card.Title>Adventure</Card.Title>
        <Card.Text>
        “The journey matters more than the destination.” ...
“So shut up, live, travel, adventure, bless, and don't be sorry.” ...
“All good things are wild and free.” ...
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Adventure