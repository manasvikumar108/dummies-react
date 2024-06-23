import React from 'react'
import './Caraousel.css'
import c1 from './carousel.jpg'

const Caraousel = () => {
    return (
        <>
            <img id='c1' src={c1} alt="" />

            <div class="explore">
                <img src="https://cdn.prod.website-files.com/6630d85d73068bc09c7c436c/6630d85d73068bc09c7c438a_find-book.a81cab25.svg" alt=""/>
                <h2 class="header_heading-2">Learning Made Easy!</h2>
            </div>


            {/* <h2>Explore Books</h2>
            <h3>Google Workspace For Dummies</h3> */}

        </>
    )
}

export default Caraousel