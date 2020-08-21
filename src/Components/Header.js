import React from 'react'
import stethoscope from '../stethoscope.png';

function Header(){

    return(

        
            <header>
                <div className ="header-div">
                    <nav >
                        <a href = "#home" className = "header">Home</a>
                        <a href = "#services"className = "header">Services</a>
                        <a href = "#about"className = "header">About</a>
                        <a href = "#contact"className = "header">Contact</a>

                        
                    </nav>
                    <img src= {stethoscope} alt="logo" className="logo"/>

                

                </div>

            </header>
       
    )
}

export default Header