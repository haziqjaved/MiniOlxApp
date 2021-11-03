import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleAd } from '../../config/firebase'

export default function Detail(props) {
  // const {val ,title, price} = props
  // const { adId } = useParams()
  // const [ ad, setAd ] = useState({})

  // useEffect(async () => {
  //   const adData = await getSingleAd(adId)
  //   setAd(adData)
  // }, [])

  // const { title, images } = ad

  return <div>
    <h2> Details </h2>
  </div>
}