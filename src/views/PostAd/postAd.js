import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { submitAdData } from '../../config/firebase';
import '../PostAd/post.css'

export default function PostAd() {
  const history= useHistory()
  const [form, setForm] = useState({
    title: '', description: '', price: '', images: []
  })
  const submitAd = async() => {
    await submitAdData(form)
    history.push('/dashboard')
  }
  const onChangeValues = (key, e) => {
    const value = key === 'images' ? e.target.files : e.target.value
    setForm({ ...form, [key]: value })
  }
  console.log('form ==>', form)
  return (<div>
    <fieldset className="postfieldset" >
      <legend className="postlegend"> Ad Post Form </legend>
      <label className='postAd'>Title:<br />
        <input style={{ width: 320 }}
          onChange={(e) => onChangeValues('title', e)}
          type="text" placeholder="Title" />
      </label><br />
      <label className='postAd'>Description:<br/>
        <input style={{ width: 320 }}
          placeholder="description..." onChange={(e) => onChangeValues('description', e)}
          type="text" />
      </label><br />
      <label className='postAd'>Price:<br/>
        <input style={{ width: 320 }}
          placeholder="Price in PKR" onChange={(e) => onChangeValues('price', e)}
          type="text" />
      </label><br />
      <label className='postAd'>Price:<br/>
        <input style={{ width: 320 }}
          multiple onChange={(e) => onChangeValues('images', e)} type="file" />
      </label><br />
      <button className="postBtn" onClick={submitAd}>Post</button>
      <br/>
    </fieldset>
  </div>


);
}
