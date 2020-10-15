import React, { useState, useEffect } from 'react'

import Section from 'parts/Section'
import Sidenav from 'parts/Sidenav'

import { ReactComponent as Not404 } from 'assets/images/404.svg'

const Donatur = ({ history }) => {
    const [Donaturs, setDonaturs] = useState(() => null)
    useEffect(() => {
        const donaturCookies = decodeURIComponent(window.document.cookie)?.split(";")?.find?.(item => item.indexOf("HAYUBERBAGI:donatur") > -1)?.split("=")[1] ?? null;
        setDonaturs(donaturCookies ? JSON.parse(donaturCookies) : null)
    }, [])

    return (
        <>
            <Sidenav />
            <Section className="flex">
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold"><span className="font-normal">Selamat datang,</span> {Donaturs?.fullname ?? "Donatur HayuBerbagi"} !</h2>
                    <p className="
                text-2xl w-10/12 mt-10">Disini anda bisa berdonasi sesuai hati, dan juga mencheck Status Donasi Anda di Menu <span className="font-bold">Donatur</span> .</p>
                </div>
                <div className="w-1/2">
                    <Not404 className="mx-auto" />
                </div>
            </Section>

        </>
    )
}

export default Donatur;