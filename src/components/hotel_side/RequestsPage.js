import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./requestpagestyle.css";
const RequestsPage = () => {
 

  // const accepted = (ind) => {

  //   let tempreq = [...requests];
  //   tempreq.splice(ind, 1);
  //   setrequests(tempreq);
  // }
  // const declined = (ind) => {
  //   let tempreq = [...requests];
  //   tempreq.splice(ind, 1);
  //   setrequests(tempreq);
  // }
  const [requests, setRequestsArray] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('email'); // Assuming you have stored the email in LocalStorage

    fetch("http://localhost:5000/gethotelrequests", {
      method: 'post',
      body: JSON.stringify({ email }), // Send email in the request body
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        setRequestsArray(data);
      })
      .catch(error => {
        console.error('Error fetching hotel requests:', error);
      });
  }, []);
  if(requests.length==0)
  {
    return(
    <h1>No more Requests remaining!</h1>);
    //document.getElementById('no-req').innerHTML='No more Requests remaining!'
  }
  return (
    <div>
      <div className='req-page'>
        <p id='req-head'>You Have following booking requests: </p>
        <div id='no-req'></div>
        {requests.map((reqval, ind) => {
          return (
            <div className='requests' key={toString(reqval)}>
              <p>Name of client : {reqval.name}</p>
              <p>Contact No : {reqval.contact}</p>
              <p>No of Persons requested for : {reqval.person} </p>
              <div className='acc-dec'>
                <button onClick={()=>{}}>Accept</button>
                <button onClick={()=>{}}>Decline</button>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default RequestsPage