import React ,{useEffect,useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar=()=>{

	const [uid,setUID]=useState(0);
useEffect(()=>{

	setUID(Number(localStorage.getItem('uid')));
	console.log('suc')
},[]);
console.log('navbar',uid);


const onLogOut=()=>{
	localStorage.clear();
	localStorage.setItem('uid',0);
	window.location.reload(false);
}
if(uid===0){
	return (
		<div className='sze10 ' style={{'height':'70px' , 'background-color':'#FEC08C'}}>
		<nav   className='' style={{color:'black', display:'flex',justifyContent:'space-between'}}>
				<div className='f2 pa2 pl3 mark link dim pointer'>
					<Link to ="/">HOME </Link>
				</div>
			<div className='f2 mark pr3'style={{display:'flex'}}>
				
					<div className='pa2 link dim pointer' style={{alignSelf:'flex-end'}}>
					{/*<Link to="/register">REGISTER </Link>*/}
					<Link to="/register">REGISTER </Link>
				</div>
					<div className='pa2 link dim pointer'style={{alignSelf:'flex-end'}}>
					<Link to="/login">LOGIN  </Link> 
				</div>
			</div> 
		</nav> 
		</div>
		)}
else{
	return (
		<div className='sze10' style={{'height':'70px'}}>
		<nav   className='' style={{color:'black', display:'flex',justifyContent:'space-between'}}>
				<div className='f2 pa2 pl3 mark link dim pointer'>
					<Link to ="/">HOME </Link>
				</div>
			<div className='f2 mark pr3'style={{display:'flex'}}>
			
					<div className='pa2 link dim pointer' style={{alignSelf:'flex-end'}}>
					<Link to="/profile">Dashboard </Link>
				</div>
					<div className='pa2 link dim pointer'style={{alignSelf:'flex-end'}}>
					<Link to ='/' onClick={onLogOut}>Logout  </Link> 
				</div>
			</div> 
		</nav> 
		</div>
		)};
}

export default Navbar;


