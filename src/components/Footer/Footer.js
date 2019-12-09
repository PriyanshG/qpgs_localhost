import React from 'react'
import './Footer.css'

const Footer=()=>{
	return(
		<footer className="pv2 ph5-m ph6-l mid-gray">
		  <small className="f6 db tc">© 2019<b className="ttu">APPU</b>., All Rights Reserved</small>
		  <div className="tc mt3">
		    <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">About</a>
		    <a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Contact</a>
		    {/*<a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>*/}
		  </div>
		</footer>

	);

}

export default Footer;
