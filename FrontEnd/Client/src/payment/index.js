import Logo from './logoheader.png';
import React from 'react';
import {Link} from 'react-router-dom' 

function Payment() {
    return (
<div>
        <img src={Logo} alt='Logo' style={{width:"80%", marginLeft:"100px"}} />
        <div style={{marginLeft:"50px"}}>
        <strong >Thông tin người mua:</strong>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
        </div>
        </div> 
        

</div>
    );
}

export default Payment;
