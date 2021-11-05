// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import db, { getSingleAd } from '../../config/firebase'
import '../Detail/index.css'
// import FbImageLibrary from 'react-fb-image-grid'

export default function Detail() {
  const { adId } = useParams()
  const history = useHistory()
  const [ad, setAd] = useState({})


  useEffect(async () => {
    const adData = await getSingleAd(adId)
    setAd(adData)
  }, [])

  const { title, price, description, images } = ad


  return (<div >
    <h2 > Detail  </h2>
    <h2 style={{marginLeft:'1200px',cursor:'pointer'}} onClick={() => history.push('/dashboard')}>❌</h2>
    {/* <h2><button className="btn" style={{textAlign:'center',width: 120, height: 50, borderRadius: '50%',border:'none', border: 'none', fontFamily: 'arial', fontWeight: 'bold', fontStyle: 'italic'}} onClick={() => history.push('/dashboard')}>❌</button> */}
    <div className='detail_item'>
     <h3>Rs:{price}</h3>
      <p><b>Title: </b>{title}</p>
      <p><b>Description:</b>{description}</p>
    </div>
    {/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/570935/910/606/m2/fpnw/wm1/d6fqaw5zsotdhhyzfqecj84gtmapx7saog8mjzqc0udiuurjuquodmniclkws2ek-.jpg?1437241093&s=e7b3d3c294eb629a38047de49007fa9f" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://c8.alamy.com/comp/E4A7HJ/carousel-southbank-london-england-united-kingdom-europe-E4A7HJ.jpg" class="d-block w-100" alt="..." / >
    </div>
    <div class="carousel-item">
      <img src="http://yesofcorsa.com/wp-content/uploads/2017/05/Carousel-Desktop-Wallpaper.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

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
