import React from 'react'

function FormRowSelect({name,labelText,handleChange,options}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">{labelText || name}</label>
      <select className="form-select" onChange={handleChange} name={name}>
        {options.map((item,index)=>{
          return <option value={item} key ={index}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default FormRowSelect;
