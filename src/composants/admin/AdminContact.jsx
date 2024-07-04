import React, { useEffect, useState } from 'react'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";

export default function AdminContact() {
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')

    async function fetchContact() {
        const reponse = await fetch('http://localhost:3333/contact')
        const data = await reponse.json()
        console.log(data);
        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
    }
    useEffect(() => {
        fetchContact()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        console.log(tel, email, adresse)
        fetch('http://localhost:3333/contact', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ nom, prenom, tel, email, adresse })

        })
            .then(reponse => reponse.json())
            .then(data => console.log(data))
    }
    return (

        <div className='flex flex-col gap-6 bg-slate-100'>
            <p className='text-4xl font-semibold mt-16 text-center'>Contact</p>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col ml-2 mt-10 gap-2 mb-2 px-8'>
                    <label className='text-2xl flex justify-between items-center'>Tel<MdOutlinePhonelinkRing /></label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 ml-2 mb-4 px-8'>
                    <label className='text-2xl flex justify-between items-center'>Email<AiOutlineMail /></label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 ml-2 px-8'>
                    <label className=' text-2xl flex justify-between items-center'>Adresse<HiOutlineHome /></label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)} />
                </div>
            </form>
        </div>
    )
}
