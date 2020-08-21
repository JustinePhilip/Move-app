import React from 'react'
import collection from '../collection.png';
import delivery from '../delivery.png';
import Branding from '../Branding.png';
import {Container, Row, Col, Button} from 'react-bootstrap';

function MainContent(){

    return(
        <main>
            <div className ="container">
                <Container>
                    <Row>
                        <Col >
                            <h2>OUR MISSION</h2>
                                <p>Our mission is a lorem ipsum which makes this particular div  a dummy text to be edited 
                                    later and be improved upon.  The original content will be gotten later andwe than be used in 
                                    place of this.
                                </p>

                                <p>Our mission is a lorem ipsum which makes this particular div  a dummy text to be edited 
                                    later and be improved upon.  The original content will be gotten later andwe than be used in 
                                    place of this.
                                </p>

                                <p>Our mission is a lorem ipsum which makes this particular div  a dummy text to be edited 
                                    later and be improved upon.  The original content will be gotten later andwe than be used in 
                                    place of this.
                                </p>
                                <Button onClick ={setTimeout} className ="btn">place order</Button>
                        </Col>
                    </Row>
                </Container>
                    
                    <div className = "image-div">
                        <img src = {collection} alt ="collection" className="collection"/>
                        <img src = {delivery} alt ="delivery" className = "delivery"/>
                        <img src = {Branding} alt= "Branding" className = "Branding" />

                    </div>


            </div>


        </main>
    )
}


export default MainContent