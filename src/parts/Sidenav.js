import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import donaturs from 'constant/api/donaturs'
import { setAuthorizationHeader } from 'configs/axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidenav = ({ history }) => {
    const [donatur, setdonatur] = useState([])
    useEffect(() => {
        const donaturStorage = localStorage.getItem("HAYUBERBAGI:token")
        setdonatur(JSON.parse(donaturStorage))
    }, [])
    const logout = () => {
        if (donatur) {
            setAuthorizationHeader(donatur.dataTokenDonatur.token)
            donaturs.logout({
                donatur_id: donatur.dataTokenDonatur.donatur_id
            }).then((res) => {
                localStorage.removeItem('HAYUBERBAGI:token')
                toast.success("Berhasil Logout")
                setTimeout(() => {
                    history.push("/login")
                }, 2000);

            }).catch(err => {
                if (err?.response?.data?.message === "jwt expired") {
                    setAuthorizationHeader(donatur.dataTokenDonatur.token)
                    localStorage.removeItem('HAYUBERBAGI:token')
                    toast.success("Berhasil Keluar")
                    setTimeout(() => {
                        history.push("/login")
                    }, 2000);
                }
            })
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="sidenav h-full fixed z-10 top-0 left-0 bg-orange-400 text-gray-800 py-20" style={{ width: 160 }}>
                <Link to="/">Home</Link>
                <Link to="/donatur">Donatur</Link>
                <Link to="/donasi">Donasi</Link>
                <button onClick={logout} className="hover:text-white transition-all duration-150 focus:outline-none">Logout</button>
            </div>
        </>
    )
}

export default withRouter(Sidenav);