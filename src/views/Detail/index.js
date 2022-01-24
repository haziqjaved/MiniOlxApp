import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import db, { getSingleAd } from '../../config/firebase'
import FbImageGrid from 'react-fb-image-grid';
import { Card } from 'react-bootstrap'

export default function Detail() {
  const { adId } = useParams()
  const history = useHistory()
  const [ad, setAd] = useState({})
  useEffect(async () => {
    const adData = await getSingleAd(adId)
    setAd(adData)
  }, [])

  return (
    <div align="center">
      <h2 style={{ fontFamily:'sans-serif(red-serif)',alignItems:'center',fontStyle:'italic'}}> Ad Detail  </h2>
      <h2 style={{ float: 'right', cursor: 'pointer' }} onClick={() => history.push('/dashboard')}>❌</h2>
      <div style={{ width: '68%', display: 'flex' }}>
        <FbImageGrid images={ad.images} countFrom={1} />
        <div>
          <Card  style={{ width: '100%',padding:'30px', height:'50%' }}>
            <Card.Body>
              <Card.Title style={{fontSize:'28px',marginBottom:'25px'}} >Title: {ad.title}</Card.Title>
              <Card.Subtitle  style={{fontSize:'18px'}} className="text-muted">Price: {ad.price}</Card.Subtitle>
              <Card.Text style={{fontSize:'2rem',lineHeight:'30px'}}>
                Location: {ad.location}<br/>Description: {ad.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  style={{ width: '50%%' , height:'40%' }}>
            <Card.Body  style={{width:'100%'}}>
              <Card.Title style={{fontSize:'28px',marginBottom:'25px'}} >Seller Description</Card.Title>
              <Card.Text style={{fontSize:'2rem',lineHeight:'30px'}}>
               <br/>📧 {ad.email}<br/> 📞{ad.contactNo}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}