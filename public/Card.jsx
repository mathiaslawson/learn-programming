import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Card.css';  // Import the CSS file for custom styles

const MyCard = ({ image, title, description, overlayText }) => {
  return (
    <Card className="my-card" style={{ border: 'none' }}>
      <div className="card-img-top" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay-text">{overlayText}</div>
      </div>
      <CardBody>
        <CardTitle tag="h5" className="fw-bolder">{title}</CardTitle>
        {/* <CardText className="card-text">{description}</CardText> */}
      
      </CardBody>
    </Card>
  );
}

export default MyCard;
