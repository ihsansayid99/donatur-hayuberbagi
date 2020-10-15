import React from 'react'

const Footer = () => {
    const d = new Date();
    const n = d.getFullYear();
    return (
        <>
            <footer className="mx-auto text-center text-gray-800 leading-relaxed">
                &copy; Copyright HayuBerbagi.com {n} <br />
            Bandung, Indonesia
          </footer>
        </>
    )
}

export default Footer;
