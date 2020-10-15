import React from 'react'

import propTypes from 'prop-types'

const Input = ({ name, value, error, labelName, onChange, type, inputClassName, placeholder, infoFyi }) => {
    return (
        <div className="flex flex-col mb-4 mt-6">
            <label htmlFor={name} className={["text-lg mb-2", error ? "text-red-500" : "text-gray-900"].join(" ")}>{labelName}</label>
            <span className="text-red-500 text-xs ml-auto">{infoFyi}</span>
            <input type={type} value={value} onChange={onChange} className={["bg-white focus:outline-none border px-6 py-3 w-full ", error ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400", inputClassName].join(" ")} placeholder={placeholder} name={name} />
            <span className="text-red-500 pt-2">
                {
                    error
                }
            </span>
        </div>
    )
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    error: propTypes.string,
    labelName: propTypes.string,
    onChange: propTypes.func.isRequired,
    inputClassName: propTypes.string,
    placeholder: propTypes.string,
    infoFyi: propTypes.string,
    type: propTypes.oneOf(['text', 'email', 'password', 'tel', 'number']),
}

export default Input;
