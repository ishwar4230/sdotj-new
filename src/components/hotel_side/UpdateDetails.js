import React, { useState } from 'react'
import "./updatedetailsstyle.css"
const UpdateDetails = () => {
    let emailAddress=localStorage.getItem('email');
    const [name,setname]=useState();
    const [address,setaddress]=useState();
    const [pincode,setpincode]=useState();
    const [email,setemail]=useState(emailAddress);
    const [contact,setcontact]=useState();
    const [desc,setdesc]=useState();
    const [img_url, setimg_url]=useState();
    
    const updateDetails= async ()=>{
        try {
            let result = await fetch("http://localhost:5000/updatehotel", {
              method: 'put',
              body: JSON.stringify({
                hotel_email:email,
                hotel_name:name,
                hotel_address:address,
                hotel_pin:pincode,
                hotel_contact:contact,
                hotel_desc:desc,
                hotel_img:img_url
            }),
              headers: {
                'Content-Type': 'application/json'
              },
            });
            result = await result.json();
            console.log(result);
      
          } catch (error) {
            console.log("ssss");
          }
    }
    
    return (
        <div id='update-hotel-detail'>
            <p id='update-details-heading'>Update Your Details Here</p>
            <div className='update-input-box'>
                <input className='update-text-box' type='text' placeholder='Enter Hotel Name' value={name} onChange={(e) => setname(e.target.value)}/>
            </div>
            <div className='update-input-box'>
                <input className='update-text-box' type='text' placeholder='Hotel Address' value={address} onChange={(e) => setaddress(e.target.value)}/>

            </div>
            <div className='update-input-box'>
                <input className='update-text-box' type='text' placeholder='Pin-Code' value={pincode} onChange={(e) => setpincode(e.target.value)}/>

            </div>
            {/* <div className='update-input-box'>
                <input className='update-text-box' type='text' placeholder='E-mail' />

            </div> */}
            <div className='update-input-box'>
                <input className='update-text-box' type='text' placeholder='Contact No' value={contact} onChange={(e) => setcontact(e.target.value)}/>

            </div>
            <div id='update-input-box-details'>
                <input className='update-text-box' type='text' placeholder='Say Something about your Hotel' value={desc} onChange={(e) => setdesc(e.target.value)}/>

            </div>
            <div className='update-input-box'>
                <input className='update-text-box' type='text' placeholder='Drive-url of Your hotel image' value={img_url} onChange={(e) => setimg_url(e.target.value)}/>

            </div>
            <button id='update-detail-submit' onClick={updateDetails}>Update Details</button>
        </div>
    )
}

export default UpdateDetails