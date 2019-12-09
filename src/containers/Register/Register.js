import React ,{useState} from 'react'
import logo from '../../images/logo.png';
import {useHistory} from "react-router-dom";

const Register= ({loadUser})=>{

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [name,setName]=useState('');

 const history=useHistory();


 const onRegister=(event)=>{
    event.preventDefault();
  if(!email|| !name || !password)
    return alert('Invalid Input');//console.log('Incorrect form submis')

    fetch('https://serene-river-38708.herokuapp.com/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:email,
        password:password,
        name:name
      }),
    })
    .then(response=>response.json())
    .then(user=>{
      if(user){

      console.log('dsf',user);
        loadUser(user);
        // localStorage.setItem('userData',user.name);
        history.push("/profile");
  window.location.reload(false);
      }
    })
};

const onEmailChange=(event)=>{
/*  console.log(event.target.value);*/
  setEmail(event.target.value);
  console.log(email.length);
}
const onPasswordChange=(event)=>{
/*  console.log(event.target.value);*/
  setPassword(event.target.value);
}
const onNameChange=(event)=>{
/*  console.log(event.target.value);*/
  setName(event.target.value);
}

/*const onRegister=(event)=>{
          event.preventDefault();
          if(true){
            console.log('sfa');
            history.push("/profile");
          }

        };*/
  return(

      
      <div className='divide50 sze90'>
          <div id='divB'>
          {/* <img src={defimg} height='100%' />*/}
          </div> 
          <div style={{width:'100%',overflow: 'auto'}} className=' bgcolor sze90  pa4 ' >{/*dispFlex center */}
            <img src={logo} alt='Logo' className='imageLogo' />
            <main className="pa4 black-80 center">
                <form className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Register</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Name <span style={{color:'red'}}> *</span></label>
                      <input onChange={onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="text" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email <span style={{color:'red'}}> *</span></label>
                      <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password <span style={{color:'red'}}> *</span></label>
                      <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="password"  id="password"/>
                    </div>
                  
                  </fieldset>
                  <div className="center">
                    <input onClick={onRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"  value="Register"/>
                  </div>
                
                </form>
              </main>
            
          </div> 
      </div> 
)};

export default Register;


