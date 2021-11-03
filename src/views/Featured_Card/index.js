import React, { useState, useEffect } from 'react';
import { getAllAds } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
import '../Featured_Card/index.css'
export default function Featured_Card(){
    const [detail, setDetail] = useState([{
        title: '', description: '', price: '', images: []
    }])
    // const [form, setForm] = useState([
    //     title = '',
    //     price = '',
    // ])  Mairaj
    const history = useHistory()
    const [ads, setAds] = useState([])
    useEffect(async () => {
        const tempAds = await getAllAds()
        setAds(tempAds)
    }, [])

    const viewbtn = () => {
        history.push('/detail/id')
    }
    return (
        <div>
            {ads.map((val) => {
                return (
                    <>
                        {/* <Detail val ={val} /> */}
                        <div className="cards">
                            <div className="card" >
                                <img src={val.images[0]} className="card__img" />
                                <div className="card__info">
                                    <h3 className="car__title">{val.title}</h3><br />
                                    <span className="card__category">Rs {val.price}</span><br />
                                    <a href='#'>
                                        <button className='Vbtn' onClick={viewbtn} >View more...</button><br /><br />
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