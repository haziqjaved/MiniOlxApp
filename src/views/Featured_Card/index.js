import React, { useState, useEffect } from 'react';
import { getAllAds } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
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
        // console.log(adId);
        history.push(`/detail/${adId}`)
    }
    return (
        <div>
            {ads.map((val) => {
                return (
                        <div className="cards">
                            <div className="card" >
                                <img src={val.images[0]} className="card__img" />
                                <div className="card__info">
                                    <h4 className="card__title">{val.title}</h4><br />
                                    <span className="card__category">Rs {val.price}</span><br />
                                    <a href='#'>
                                        <button className='Vbtn' onClick={() => goToDetail(val.id)} >View more...</button><br /><br />
                                    </a>
                                </div>
                            </div>
                        </div>)
            })
            }
        </div>
    )
}