import Logo from './logoheader.png';
import React from 'react';
import {Link} from 'react-router-dom' 

function Payment2() {
    return (
<div>
    <img src={Logo} alt='Logo' style={{width:"80%", marginLeft:"100px"}} />
    <form style={{marginLeft:"100px"}}>
       <h5>Chọn phương thức giao hàng:</h5>
        <select>                 
        <option> Giao hàng và thu tiền tại nhà </option>
        <option> Chuyển phát nhanh </option>
         </select>
         <br/>
    </form>

    


    <div>
    <br/>
    <Link to='/payment3'>
    <button type="button" className="btn btn-default" style={{width:"100%",height:"50px",background:"#585858", marginBottom:"20px"}}> 
    <p style={{fontsize:"20px",color:"#ffffff"}}>Tiếp</p> </button>
    </Link>
  </div>

</div>
    );
}

export default Payment2;
