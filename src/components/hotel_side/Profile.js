import React from 'react'
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./profilestyle.css";
const hotel_profile_data=["The Hotel Taj","Mumbai, India","110001","1234567890","abcde123@gmail.com"];
const Profile = () => {

  const navigate = useNavigate();
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('email');

    fetch("http://localhost:5000/fetchhoteldetail", {
      method: 'post',
      body: JSON.stringify({ hotel_email: email }), // Send email in the request body
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        setHotelData(data);
      })
      .catch(error => {
        console.error('Error fetching hotel details:', error);
      });

  }, []);

  if (!hotelData) {
    return <p>Loading...</p>;
  }
  if(hotelData.error)
  {
    setTimeout(()=>{navigate("/updatehotel")}, 5000);
    return(
      <div>
      <h1>Update Your details First</h1>
      <h2>Redirecting to Update page ...</h2>
      </div>
    )
  }
  return (
    <div id='profile-card'>
      <div id='profile-card-left'>
        <div id='profile-image-div'>
          <img className='circular-image' src={hotelData.imageUrl} alt="Hotel" />
        </div>
        <p id='hotel-name'>{hotelData.hotelname}</p>
        <p className='hotel-address'>{hotelData.address}</p>
        <p className='hotel-address'>{hotelData.pin}</p>
      </div>
      <div id='profile-card-right'>
        <div id='hotel-info'>
          <p id='your-info'>Your Hotel Info</p>
        </div>
        <div id='hotel-details'>
          <p>Hotel Name &#160;&#160;&#160;&#160;: {hotelData.hotelname}</p>
          <p>Hotel Address&#160;&#160;: {hotelData.address}</p>
          <p>Contact No&#160;&#160;&#160;&#160;&#160;&#160;: {hotelData.contactNumber}</p>
          <p>E-mail&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;: {hotelData.email}</p>
        </div>
      </div>
    </div>
  );
  
}

export default Profile