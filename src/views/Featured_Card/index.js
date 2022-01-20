import React, { useState, useEffect } from 'react';
import { getAllAds } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
import { Card, Button,Container,Col,Row,Image } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Featured_Card/index.css'
export default function Featured_Card() {
    const [ads, setAds] = useState([])
    const history = useHistory()

    useEffect(async () => {
        const tempAds = await getAllAds()
        console.log('tempAds', tempAds)
        setAds(tempAds)
    }, [])
    const goToDetail = (adId) => {
        history.push(`/detail/${adId}`)
    }
    return (    
        <Container fluid>
            <Row>
              
                {ads.map(val => {
                return (
                <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}  >
                <Card className='mb-3 mt-3' style={{borderRadius:'10px'}}  >
                <Image src={val.images[0]} className='card-img-top card__img'
                alt='ads Images' />
                <Card.Body>
                    <Card.Title> {val.title}</Card.Title>
                    <Card.Text>  Rs {val.price}/= </Card.Text>
                    <Button variant="primary" style={{float:"left"}} onClick={() => goToDetail(val.id)} >View more...</Button>
                </Card.Body>
                </Card>
                </Col>)
            })
            }
               
            </Row>          
        </Container>
    )
}

