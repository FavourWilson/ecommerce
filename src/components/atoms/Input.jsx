import React from 'react'

const Input = ({ onChange, className, type, placeHolder }) => {
  return (
    <input type={type} placeholder={placeHolder} onChange={onChange} className={`${className} border-2 outline-none border-slate-700-`}/>
  )
}

export default Input