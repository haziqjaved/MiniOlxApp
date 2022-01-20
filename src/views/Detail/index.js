// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import db, { getSingleAd } from '../../config/firebase'
import '../Detail/index.css'

export default function Detail() {
  const { adId } = useParams()
  const history = useHistory()
  const [ad, setAd] = useState({})


  useEffect(async () => {
    const adData = await getSingleAd(adId)
    setAd(adData)
  }, [])

  const { title, price, description,location, images } = ad


  return (<div >
    <h2 > Detail  </h2>
    <h2 style={{marginLeft:'1200px',cursor:'pointer'}} onClick={() => history.push('/dashboard')}>❌</h2>
    {/* <h2><button className="btn" style={{textAlign:'center',width: 120, height: 50, borderRadius: '50%',border:'none', border: 'none', fontFamily: 'arial', fontWeight: 'bold', fontStyle: 'italic'}} onClick={() => history.push('/dashboard')}>❌</button> */}
    <div className='detail_item'>
     <h3>Rs:{price}</h3>
      <p><b>Title: </b>{title}</p>
      <p><b>Description:</b>{description}</p>
    </div>
    {images && images.map(item => {
      {/* return(
        <FbImageLibrary images={[item]}/>
      ) */}
      return <img width="225" height="" src={item} />
    })}
    <br/>
  </div>
  )
}
