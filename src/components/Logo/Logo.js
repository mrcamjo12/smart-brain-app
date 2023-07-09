import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'> 
			<Tilt className ='Tilt br2 shadow-2' options={{ max : 55 }} style={{ height: 140, width: 120}}>
      			<div style={{ height: '100px', backgroundColor: 'transparent' }} className='Tilt-inner pa3'>
       				<img alt='logo' src={brain} style={{paddingTop: '5px'}}></img>
     			 </div>
    		</Tilt>
		</div>
)}

export default Logo