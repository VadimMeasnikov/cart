import React, { useState } from 'react'
import './form.scss'


export default function Form(props) {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')

    return (
        <div className="box">
              <div className='container'>
            <div className="userData1">
                <div className="nameBox">
                    <input className='inp' placeholder='name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="surnameBox">
                    <input className='inp' placeholder='surname' type="text" value={surname} onChange={(e) => { setSurname(e.target.value) }} />
                </div>
            </div>
            <div className="userData2">
                <div className="telBox">
                    <input className='inp' placeholder='telephone' type="text" value={tel} onChange={(e) => { setTel(e.target.value) }} />
                </div>
                <div className="emailBox">
                    <input className='inp' placeholder='email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
            </div>
            <div className="userData3">
                <div className="adressBox">
                    <input className='adressInp' placeholder='adress' type="text" value={adress} onChange={(e) => { setAdress(e.target.value) }} />
                </div>
            </div>
            <button className='btn' type='button' 
            onClick={
                () => {
                props.addInfo(name, surname, tel, email, adress);
                setName('');
                setSurname('');
                setEmail('');
                setTel('');
                setAdress('');
                
                }}> SEND </button>
        </div>
        </div>
      
    )
}
