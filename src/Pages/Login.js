import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { populateProfileDonatur } from 'store/actions/donaturs'
import useForm from 'helpers/hooks/useForm'
import fieldErrors from 'helpers/fieldErrors'

import donaturs from 'constant/api/donaturs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero from 'parts/Hero';
import Footer from 'parts/Footer';

import Input from 'components/Form/Input';
import { setAuthorizationHeader } from 'configs/axios'

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [{ email, password }, setstate] = useForm({
        email: "",
        password: ""
    })
    const [errors, seterrors] = useState(null)
    const submit = (e) => {
        e.preventDefault();
        donaturs.login({
            email,
            password
        }).then((res) => {
            setAuthorizationHeader(res.data.dataTokenDonatur.token);
            donaturs.details(res.data.dataTokenDonatur.donatur_id).then(detail => {
                dispatch(populateProfileDonatur(detail.data))
                const production = process.env.REACT_APP_FRONT_PAGE === "https://hayuberbagi.com" ? "Domain = hayuberbagi.com" : "ENVIRONMENT"

                localStorage.setItem("HAYUBERBAGI:token", JSON.stringify({
                    ...res.data, email: email
                }))
                const redirect = localStorage.getItem("HAYUBERBAGI:redirect")
                const donaturCookie = {
                    fullname: detail.data.donatur.fullname,
                    no_phone: detail.data.donatur.no_phone
                }
                const expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
                document.cookie = `HAYUBERBAGI:donatur=${JSON.stringify(donaturCookie)}; expires=${expires.toUTCString}; path:/; ${production}`

                toast.success("Anda sedang diarahkan, tunggu beberapa saat")
                setTimeout(() => {
                    history.push(redirect || "/")
                }, 3000);
            })
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
                    <div className="herotext py-20 container">
                        <div className="w-2/5 mx-auto bg-white py-10 px-10 rounded-lg">
                            <h2 className="text-2xl font-semibold text-center">Login</h2>
                            <form onSubmit={submit}>
                                <Input name="email" type="email" error={ERRORS?.email?.message} value={email} onChange={setstate} labelName="Email" placeholder="Email Anda" />
                                <Input name="password" type="password" error={ERRORS?.password?.message} value={password} onChange={setstate} labelName="Password" placeholder="Password Anda" />

                                <button type="submit" className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white py-3 px-6 mt-4 w-full">Login</button>
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

export default withRouter(Login);
