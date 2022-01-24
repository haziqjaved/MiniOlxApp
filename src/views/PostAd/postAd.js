import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { submitAdData } from '../../config/firebase';
import '../PostAd/post.css'

export default function PostAd() {
  const history= useHistory()
  const [form,setForm]=useState({})
    const submitAd = async ()=> {
    const stringifyUser = localStorage.getItem('user')
    console.log(stringifyUser)
    const { uid } = JSON.parse(stringifyUser)
    await submitAdData({uid, ...form})
    console.log('Uid from ad',uid)
    history.push('/dashboard')
  }
  const onChangeValues = (key, e) => {
    const value = key === 'images' ? e.target.files : e.target.value
    setForm({ ...form, [key]: value })
  }
  console.log('form ==>', form)
  // console.log('AADDDS ==>', ads)
  
  return (
    <div id="container">
    <div className="form-wrap">
      <h1 style={{color:'black'}}>Post Ad</h1>

      <p>Include Ad Details</p>
      <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label for="adTitle">Title</label>
              <input
                type="text"
                name="adTitle"
                id="adTitle"
                placeholder="Title"
                onChange={(e) => onChangeValues('title', e)}
              />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="e.g:Hard One"
                onChange={(e) => onChangeValues('description', e)}
              />
            </div>
            <div className="form-group">
              <label for="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="PKR /="
                onChange={(e) => onChangeValues('price', e)}
              />
            </div>
            <div className="form-group">
              <label for="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="e.g:Hard One"
                onChange={(e) => onChangeValues('location' , e)}
              />
            </div>
            <div className="form-group">
              <label for="location">Contact Number</label>
              <input
                type="text"
                name="contact"
                id="contactNo"
                placeholder="012334454"
                onChange={(e) => onChangeValues('contactNo' , e)}
              />
            </div>
            <div className="form-group">
              <label for="location">Email Id</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email@gmail.com"
                onChange={(e) => onChangeValues('email' , e)}
              />
            </div>
        <div className="form-group">
          <label for="image">Upload Pictures</label>
          <input
            name="image"
            type="file"
            id="image"
            placeholder="image"
            onChange={(e) => onChangeValues('images', e)} 
            multiple
          />
        </div>

        <button type="submit" onClick={submitAd} className="btn">
          Post Ad
        </button>
      </form>
    </div>
  </div>

  
)}