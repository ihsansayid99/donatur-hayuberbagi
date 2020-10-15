import React, { useEffect, useState } from 'react'
import donaturs from 'constant/api/donaturs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useForm from 'helpers/hooks/useForm'
import fieldErrors from 'helpers/fieldErrors'

import Section from 'parts/Section'
import Sidenav from 'parts/Sidenav'
import Input from 'components/Form/Input'

import { setAuthorizationHeader } from 'configs/axios'

const Donasi = ({ history }) => {
    const [{ donation_option, many_donation }, setState] = useForm({
        donation_option: "",
        many_donation: ""
    })

    const [donatur, setdonatur] = useState([])
    const [errors, seterrors] = useState(null)
    useEffect(() => {
        const donaturStorage = localStorage.getItem("HAYUBERBAGI:token")
        setdonatur(JSON.parse(donaturStorage))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        setAuthorizationHeader(donatur.dataTokenDonatur.token)
        const jumlahDonasi = parseInt(many_donation)
        donaturs.donate({
            donation_option,
            many_donation: jumlahDonasi,
            donatur_id: donatur.dataTokenDonatur.donatur_id
        }).then((res) => {
            toast.success("Berhasil Donasi! Silahkan check di menu Donatur")
            setTimeout(() => {
                history.push("/donatur")
            }, 3000);
        }).catch(err => {
            if (err?.response?.data?.message === "jwt expired") {
                setAuthorizationHeader(donatur.dataTokenDonatur.token)
                localStorage.removeItem('HAYUBERBAGI:token')
                toast.success("Berhasil Keluar")
                setTimeout(() => {
                    history.push("/")
                }, 2000);
            }
            console.log(err?.response?.data?.message === "jwt expired")
            toast.warning("Uppps Ada error nih")
            seterrors(err?.response?.data?.message)

        })
    }

    const ERRORS = fieldErrors(errors)
    console.log(ERRORS)


    return (
        <>
            <ToastContainer />
            <Sidenav />
            <Section>
                <h2 className="text-4xl">Donasi</h2>
                <div className="w-full bg-orange-400 py-10 px-10 mt-6">
                    <label htmlFor="donasi-langsung" className="text-lg mb-2">Donasi Langsung</label>
                    <div className="w-1/2">
                        <form onSubmit={submit}>
                            <div className="flex-col mb-4 mt-6">
                                <select name="donation_option" onChange={setState} className={["bg-white focus:outline-none border px-6 py-3 w-full", ERRORS?.donation_option?.message ? "border-red-500 text-red-500" : "border-gray-700 focus:border-orange-400",].join(" ")}>
                                    <option value="">Pilih donasi...</option>
                                    <option value="donasi langsung">Donasi Langsung</option>
                                    <option value="kelas yatim">Kelas Yatim</option>
                                    <option value="wisata yatim">Wisata Yatim</option>
                                    <option value="berbagi nasi">Berbagi Nasi</option>
                                </select>
                            </div>
                            <Input name="many_donation" type="number" value={many_donation} error={ERRORS?.many_donation?.message} labelName="Jumlah" onChange={setState} placeholder="Masukan jumlah donasi" />
                            <button type="submit" className="bg-gray-800 hover:bg-gray-700 transition-all duration-200 focus:outline-none shadow-inner text-white py-3 px-6 mt-4 w-full">Donasi</button>
                        </form>
                    </div>

                </div>
            </Section>
        </>
    )
}

export default Donasi;