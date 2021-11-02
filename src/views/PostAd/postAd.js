import React, { useState } from 'react';
import { submitAdData } from '../../config/firebase';

export default function PostAd() {
const [form, setForm] = useState({
  title:'',description:'',price:'',images:[]
})
  const submitAd = () => {
    submitAdData(form)
  }
  const onChangeValues = (key, e) => {
    const value = key === 'images' ? e.target.files : e.target.value
    setForm({ ...form, [key]: value })
  }
  console.log('form ==>', form)
    return (<div>
      <fieldset style={{width:450,height: 540 }}>
        <legend> Ad Post Form </legend>
        <label className="" />
      </fieldset>
      </div>

           {/* <p>Title: <input  placeholder="title" onChange={(e) => onChangeValues('title', e)} /></p>
           <p>Description: <input   placeholder="description" onChange={(e) => onChangeValues('description', e)} /></p>
           <p>Demand: <input  placeholder="Price in PKR" onChange={(e) => onChangeValues('price', e)}/></p>
           <p><input   multiple  onChange={(e) =>onChangeValues('images', e)} type="file"  /></p>
           <button onClick={submitAd}>Post</button><br/>            */}
);
}
