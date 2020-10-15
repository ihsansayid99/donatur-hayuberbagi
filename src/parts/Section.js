import React from 'react'

const Section = ({ children, className }) => {
    return (
        <>
            <div className={["main px-10 py-20", className].join(" ")}>
                {children}
            </div>
        </>
    )
}

export default Section;
