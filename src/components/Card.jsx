import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Card.css';  // Assuming you will create this CSS file
import { Link } from 'react-router-dom';

const MyCard = ({ image, title, description, overlayText }) => {

  const generateLink = (language, section) => {
    const encodedLanguage = encodeURIComponent(language);
    return `/courses-page/${encodedLanguage}/${section}`;
  };



  return (
    
      <Card className="my-card" style={{ border: 'none', color: 'black'  ,height: '100%'}}>
        <Link to={generateLink(title, "get")} style={{ textDecoration: 'none' , color: '#fff' }}>
      <div className="card-img-top" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay-text">{overlayText}</div>
      </div>
      <CardBody>
        <CardTitle tag="h5" className='fw-bolder' style={{ color: 'black' }}>{title}</CardTitle>
        {/* <CardText style={{fontSize: '0.8em', color: '#585858', letterSpacing: '1px', lineHeight: '28px'}}>{description}</CardText> */}

     
      </CardBody>
      </Link>
    </Card>
   
  );
}

export default MyCard;
