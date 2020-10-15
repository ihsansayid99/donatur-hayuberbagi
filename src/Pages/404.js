import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Not404 } from 'assets/images/404.svg'

const NotFound = () => {
    return (
        <>
            <section className="bg-orange-500 w-full h-full fixed" style={{ backgroundImage: "url('images/bg-overlay.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-overlay w-full h-full bg-black opacity-75"></div>
                <div className="h-full container w-full mx-auto py-20">
                    <div className="w-2/5 mx-auto bg-white py-10 px-10 rounded-lg text-center">
                        <Not404 className="mx-auto" />
                        <h2 className="text-2xl font-semibold text-orange-700 mt-4">Halaman tidak Ditemukan :(</h2>
                        <Link to="/login"><button className="bg-orange-400 px-4 py-2 rounded-md mt-4
                        hover:bg-orange-600 hover:text-white transition-all duration-200">Kembali</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound;