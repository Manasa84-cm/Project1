import React from 'react'
import './Nav.css'
import './Body.css'

function Navbar() {
    return (
        <div id='Navclasses'>
            <div id='navbar'>
                <h1>Back To Collage Offers</h1>
                <div id='list'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Deals</li>
                    <li>Find A Store</li>
                    <li>Support</li>
                </div>
            </div>
            <div>
                <div id='div1'></div>
            </div>
            <div id="body">
                <p >Unlock Possibilites With AI<br></br> Streamline Yours Studies With Offers On AI PCs*</p>
            </div>
            <div id="Time">
            </div>
            <div id="Paragraph">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsam mollitia non ex, reprehenderit fugit?</p>

            </div>
            <div id="held">
                <button style={{color:'red'}}>Get started</button>
                <button style={{color:'red'}}>Read more</button>
            </div>
        </div>
    )
}

export default Navbar