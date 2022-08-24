import React from 'react';
import {Card , Button} from "react-bootstrap"

const Home = () => {
  return (
    <div>
            <Card className='card' style={{ width: '18rem' ,height:"700px" }}>
      <Card.Img variant="top" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg" />
      <Card.Body>
        <Card.Title style={{color:"red", fontSize:"30px"}} >Home</Card.Title>
        <Card.Text>
        Describe the property accurately. · Choose adjectives wisely. · Avoid red flag words. · Include words that add value. · Highlight unique features. · Take notice of .
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home