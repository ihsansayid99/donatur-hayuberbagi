import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useForm from 'helpers/hooks/useForm'
import fieldErrors from 'helpers/fieldErrors'

import donaturs from 'constant/api/donaturs'

import Hero from 'parts/Hero';
import Footer from 'parts/Footer';

import Input from 'components/Form/Input';

const Register = ({ history }) => {
    const [{ fullname, address, no_phone, email, password }, setState] = useForm({
        fullname: "",
        address: "",
        no_phone: '',
        email: "",
        password: ""
    })

    const [indoArea] = useState("+62")
    const finalPhoneNumber = indoArea + no_phone

    const [errors, seterrors] = useState(null)

    const submit = (e) => {
        e.preventDefault();
        donaturs.register({
            fullname,
            address,
            no_phone: finalPhoneNumber,
            email,
            password
        }).then((res) => {
            toast.success("Berhasil Daftar! Anda sedang di arahkan")
            setTimeout(() => {
                history.push("/login")
            }, 3000);
        }).catch(err => {
            toast.warning("Uppps Ada error nih")
            seterrors(err?.response?.data?.message)
        })
    }
    const ERRORS = fieldErrors(errors)
    return (
        <>
            <section className="relative pt-10" style={{ height: "auto" }}>
                <ToastContainer position="top-center" />
                <Hero bgImage="images/donasi-bg.jpg">
                    <div className="py-20 container">
                        <div className="w-2/5 mx-auto bg-white py-10 px-10 rounded-lg">
                            <h2 className="text-2xl font-semibold text-center">Register</h2>
                            <form onSubmit={submit}>
                                <Input name="fullname" type="text" value={fullname} error={ERRORS?.fullname?.message} labelName="Full Name*" onChange={setState} placeholder="Full Name" />
                                <Input name="address" type="text" value={address} error={ERRORS?.address?.message} labelName="Alamat*" onChange={setState} placeholder="Alamat Anda..." />
                                <Input name="no_phone" infoFyi="*Tanpa Angka 0; 81xxxxxxx" type="tel" value={no_phone} error={ERRORS?.no_phone?.message} labelName="No Handphone" onChange={setState} placeholder="No Handphone" required />
                                <Input name="email" type="email" value={email} error={ERRORS?.email?.message} labelName="Email*" onChange={setState} placeholder="Email Anda" />
                                <Input name="password" type="password" value={password} error={ERRORS?.password?.message} labelName="Password*" onChange={setState} placeholder="Password Anda" />
                                <button type="submit" className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white py-3 px-6 mt-4 w-full">Daftar</button>
                            </form>
                        </div>
                    </div>
                </Hero>
            </section>
            <section className="pt-10 pb-10">
                <Footer />
            </section>
        </>
    )
}

export default withRouter(Register);