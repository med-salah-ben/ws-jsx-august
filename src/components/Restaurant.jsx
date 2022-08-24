import React from 'react';
import {Card , Button} from "react-bootstrap"

const Restaurant = () => {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/food-and-drink/restaurants/sketch/sketch-restaurant-the-gallery-yellow-2022-640x360.jpg?mw=640&hash=04D57E17D11D4A9B7969F290056583F42EB282E0" />
      <Card.Body>
        <Card.Title>Restaurant</Card.Title>
        <Card.Text>
        A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you. If it can do both of those ...        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Restaurant