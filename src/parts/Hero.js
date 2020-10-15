import React from 'react'

import Header from 'parts/Header';
// import propTypes from 'prop-types'


const Hero = ({ children, bgImage }) => {
    return (
        <>
            <div className="absolute z-0 inset-0 w-full h-full" style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
            <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
            <Header></Header>
            <div className="container mx-auto z-20 relative">
                {children}
            </div>
        </>
    )
}

// Hero.propTypes = {
//     Children: propTypes.element,

// }

export default Hero;
