import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Card.css';  // Assuming you will create this CSS file

const MyCard = ({ image, title, description, overlayText }) => {
  return (
    <Card className="my-card">
      <div className="card-img-top" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay-text">{overlayText}</div>
      </div>
      <CardBody>
        <CardTitle tag="h5" className='fw-bolder'>{title}</CardTitle>
        <CardText style={{fontSize: '0.8em', color: '#585858', letterSpacing: '1px', lineHeight: '28px'}}>{description}</CardText>

        <div className='mt-3 d-flex justify-content-bewteen gap-5'>

            <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                <div className='fw-bolder'>Lessons</div>
                <div >5</div>
            </div>

            <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                <div className='fw-bolder'>Course Read Time</div>
                <div >1hr 2mins</div>
            </div>



        </div>
      </CardBody>
    </Card>
  );
}

export default MyCard;
