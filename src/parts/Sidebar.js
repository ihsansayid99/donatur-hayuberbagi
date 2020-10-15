import React from 'react'
import propTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Sidebar = ({ mySidebar, sidebarClose }) => {

    return (

        <div className="z-0" id={mySidebar} style={{ backgroundImage: "url('images/bg-overlay.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-overlay w-full h-full bg-black opacity-75"></div>
            <div className="container justify-end z-50 mx-auto pt-10 pb-10">
                <button onClick={sidebarClose} className="text-4xl focus:outline-none border-2
                hover:bg-white hover:text-orange-600 transition-all duration-200 px-2 mb-8 rounded-tr-lg float-right text-white">&times;</button>
                <div className="w-full border-2 rounded-lg border-white pt-10 px-32" style={{ height: "100%" }}>
                    <div className="flex items-center mx-auto">
                        <img src="images/logosmallWhite.png" alt="logo hayuBerbagi white" className="mr-4" style={{ width: 55 }} />
                        <h2 className="text-2xl font-semibold text-white">HayuBerbagi.com</h2>
                    </div>
                    <div className="mt-10 pb-20 flex">
                        <div className="w-1/3">
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">Beranda</Link>
                                </li>
                            </ul>
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">Donatur</Link>
                                </li>
                            </ul>
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">HayuBerbagi Dokumentasi</Link>
                                </li>
                            </ul>
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">HayuBerbagi News</Link>
                                </li>
                            </ul>
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">Donasi</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">Menjadi Relawan</Link>
                                </li>
                            </ul>
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <Link to="/" className="text-white hover:text-orange-100 hover:font-bold transition-all duration-200 hover:underline">Kolaborasi HayuBerbagi</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <ul className="mt-10">
                                <li className="mt-2">
                                    <h4 className="text-xl font-semibold text-gray-400">Alamat :</h4>
                                    <p className="text-white leading-loose mt-2">
                                        Jl. Teladan No.25a, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153
                                    </p>
                                    <div className="flex mt-2 text-2xl text-white">
                                        <Link to="" className="mr-4"><FontAwesomeIcon icon={faInstagram} className=" hover:text-orange-600" /></Link>
                                        <Link to="" className="mr-4"><FontAwesomeIcon icon={faTwitter} className="hover:text-orange-600" /></Link>
                                        <Link to="" className="mr-4"><FontAwesomeIcon icon={faFacebook} className="hover:text-orange-600" /></Link>
                                        <Link to="" className="mr-4"><FontAwesomeIcon icon={faYoutube} className="hover:text-orange-600" /></Link>
                                        <Link to="" className="mr-4"><FontAwesomeIcon icon={faGooglePlusSquare} className="hover:text-orange-600" /></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

Sidebar.propTypes = {
    mySidebar: propTypes.string,
    className: propTypes.string,
    sidebarClose: propTypes.func.isRequired
}

export default withRouter(Sidebar);
