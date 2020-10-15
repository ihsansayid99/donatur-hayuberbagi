import React, { useState, useEffect } from 'react'
import donaturs from 'constant/api/donaturs'

import Section from 'parts/Section'
import Sidenav from 'parts/Sidenav'

import { setAuthorizationHeader } from 'configs/axios'
import { toast } from 'react-toastify'
import HelperNumber from 'configs/helpers/formatThousand';


const DonaturData = ({ history }) => {
    const [DonaturDonate, setDonaturDonate] = useState([])
    const [donatur] = useState(JSON.parse(localStorage.getItem("HAYUBERBAGI:token")))


    useEffect(() => {
        if (Object.keys(donatur).length > 0) {
            setAuthorizationHeader(donatur.dataTokenDonatur.token)
            donaturs.getDonate(donatur.dataTokenDonatur.donatur_id)
                .then((res) => setDonaturDonate(res.data))
                .catch(err => {
                    if (err?.response?.data?.message === "jwt expired") {
                        setAuthorizationHeader(donatur.token)
                        localStorage.removeItem('HAYUBERBAGI:token')
                        toast.success("Berhasil Keluar")
                        setTimeout(() => {
                            history.push("/")
                        }, 2000);
                    }
                })
        }
    }, [donatur, history])

    console.log(DonaturDonate?.length === 0)

    return (
        <>
            <Sidenav />
            <Section>
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Data Donasi Anda</h2>
                        </div>

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Pendonatur
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Alamat
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Donasi Untuk
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Jumlah Donasi
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {DonaturDonate?.length !== 0 ?
                                            DonaturDonate.map((donatur) => {
                                                return donatur?.Donations.map((donasi, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <div className="flex items-center">
                                                                    <div>
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            {donatur.fullname}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{donatur.address}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {donasi?.donation_option}
                                                                </p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    Rp. {HelperNumber(donasi?.many_donation)}
                                                                </p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <span
                                                                    className={["relative inline-block px-3 py-1 font-semibold leading-tight", donasi?.status === "PENDING" ? "text-yellow-900" : "text-green-900 "].join(" ")}>
                                                                    <span aria-hidden
                                                                        className={["absolute inset-0 opacity-50 rounded-full", donasi?.status === "PENDING" ? "bg-yellow-200" : "bg-green-200 "].join(" ")}></span>
                                                                    <span className="relative">{donasi?.status}</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })

                                            }) : (
                                                <tr>
                                                    <td>
                                                        <h2 className="py-20 px-10 font-bold text-orange-700 text-center text-2xl">Anda Belum pernah Donasi :(</h2>
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default DonaturData;