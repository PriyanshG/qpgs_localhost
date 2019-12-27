import React , {useState} from 'react'
import logo from '../../images/logo.png';
import {useHistory,Link} from "react-router-dom";


const Login= ({loadUser})=>{

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const history=useHistory();


 const onLogin=(event)=>{
    event.preventDefault();

    if(!email.length || !password.length)
    return alert('Invalid Input');


    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:email,
        password:password
      }),
    })
    .then(response=>response.json())
    .then(user=>{
      if(user.uid){
        loadUser(user);
        // localStorage.setItem('userData',user.name);
        history.push("/profile");
        
  window.location.reload(false);
      }
    })
   /* .then(response=>response.json())
    .then(user=>{
      if(user.id){
        console.log('success');
      }

    })
*/
    /*
    if(true){
      console.log('sf');
      alterLoginFlag(true);
      history.push("/profile");
    }*/

  };

const onEmailChange=(event)=>{
/*  console.log(event.target.value);*/
  setEmail(event.target.value);
}


const onPasswordChange=(event)=>{
 /* console.log(event.target.value);*/
  setPassword(event.target.value);
}

  return(

      <div className='divide50 sze90'>
          <div id='divB'>
          {/* <img src={defimg} height='100%' />*/}
          </div> 
          <div style={{width:'100%'}} className='bgcolor sze90  pa4 'style={{ overflow: 'auto'}} >{/*dispFlex center */}
            <img src={logo} alt='Logo' className='imageLogo' />
            <main className="pa4 black-80 center">
                <form className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">LOG IN</legend>
                 
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email<span style={{color:'red'}}> *</span></label>
                      <input 
                          onChange={onEmailChange} 
                          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                          type="email" 
                          name="email-address"  
                          id="email-address"
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password<span style={{color:'red'}}> *</span></label>
                      <input 
                          onChange={onPasswordChange}
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="password" 
                          name="password"  
                          id="password"
                      />
                    </div>
                  
                  </fieldset>
                  <div className="center">
                   <Link to ="/profile">
                    <input onClick={onLogin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Log In"/>
                    </Link>
                 </div>
                  
                </form>
              </main>
            
          </div> 
      </div> 
)};

export default Login;





