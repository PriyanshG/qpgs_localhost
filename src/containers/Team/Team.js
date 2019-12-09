import React , {useState} from 'react'
import logo from '../../images/logo.png';
import {useHistory,Link} from "react-router-dom";


const Login= ({loadUser})=>{

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const history=useHistory();




  return(
		<div style={{width:'50%',height:"100%" , flexDirection: 'column',
        justifyContent: 'center',}} className='center '>
			<table>
				<tr>
					<th>Developers</th>
					
				</tr>
				<tr>
					
					<td><a target="_blank" href="https://www.linkedin.com/in/anujsingh14/">Anuj Singh</a></td>
				</tr>
				<tr>
					<td><a target="_blank" href="https://www.linkedin.com/in/prakarsh-pathak-7a2335152/">Prakarsh Pathak</a></td>
				</tr>
				<tr>
					<td><a target="_blank" href="https://www.linkedin.com/in/priyansh-gaharana-4454a1148/">Priyansh Gaharana</a></td>
				</tr>
				<tr>

					<td><a target="_blank" href="https://www.linkedin.com/in/anujsingh14/">Utkarsh</a></td>
				</tr>

				
			</table>
		</div>
)};

export default Login;





