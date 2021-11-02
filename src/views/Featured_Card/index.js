import React, { useState, useEffect } from 'react';
import { getAllAds } from '../../config/firebase';
import '../Featured_Card/index.css'
const Featured_Card = () => {
    const [ads, setAds] = useState([])
    useEffect(async () => {
        const tempAds = await getAllAds()
        setAds(tempAds)
    }, [])

    return (
        <div>
            {ads.map((val, index) => {
                return (
                    <>

                        <div className="cards">
                            <div className="card" >
                                <img src={val.images[0]} className="card__img" />
                                <div className="card__info">
                                    <h3 className="car__title">{val.title}</h3><br />
                                    <span className="card__category">Rs {val.price}</span><br />
                                    <a href='#'>
                                        <button className='Vbtn'>View more...</button><br /><br />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </>)
            })
            }
        </div>

    )

}


export default Featured_Card