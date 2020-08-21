import React from 'react'
import stethoscope from '../stethoscope.png';

function Header(){

    return(

        
            <header>
                <div className ="header-div">
                    <nav >
                        <a href = "www.google.com" className = "header">Home</a>
                        <a href = "www.google.com"className = "header">Services</a>
                        <a href = "www.google.com"className = "header">About</a>
                        <a href = "www.google.com"className = "header">Contact</a>

                        
                    </nav>
                    <img src= {stethoscope} alt="logo" className="logo"/>

                

                </div>

            </header>
       
    )
}

export default Header