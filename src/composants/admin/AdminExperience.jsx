import React, { useEffect, useState } from 'react'
import { enqueueSnackbar } from 'notistack';
import { AiTwotoneDelete } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";

const url = "http://localhost:3333"

export default function AdminExperience() {
    const [experience, setExperience] = useState([])
    const [skill, setSkill] = useState('')
    const [name, setName] = useState('')
    const [lieu, setLieu] = useState('')
    const [date, setDate] = useState('')
    const [isAdd, setIsAdd] = useState(false)
    async function fetchExperience() {

        const response = await fetch('http://localhost:3333/experience')
        const data = await response.json()
        setExperience(data)
    }

    useEffect(() => {
        fetchExperience()
    }, [])

    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(`http://localhost:3333/experience/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar("une experience a ete supprimée", {
                variant: 'error',
                autoHideDuration: '2000',
                anchorOrigin: {
                    horizontal: "center",
                    vertical: "top"
                }
            })

            console.log(data)
            fetchExperience();
        }
    }
    async function handlesave() {
        if (skill !== "") {
            console.log(skill)
            const response = await fetch(`${url}/experience`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, lieu, date })
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                enqueueSnackbar("une experience a ete ajouté", {
                    variant: 'success',
                    autoHideDuration: '2000',
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "top"
                    }
                })

                fetchExperience()
                setSkill('');
            }
        }
    }
    function handleCancel() {
        setIsAdd(false)
    }
    function addSkill() {
        setIsAdd(true)
    }
    return (
        <div className='ml-2 mt-10 gap-2 mb-2' >
            <p className=' text-3xl my-2 font-semibold text-center'>EXPERIENCE</p>

            {isAdd === false &&
                <button onClick={addSkill} className=' btn btn-success btn-sm'>Ajouter une experience</button>
            }
            {isAdd === true &&
                <div className='flex gap-3 px'>
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={lieu}
                        onChange={(e) => setLieu(e.target.value)} />
                    <button onClick={handlesave}><TfiSave color='blue' size={35} /></button>
                    <button onClick={handleCancel}><ImCancelCircle color='gray' size={30} /></button>
                </div>}

            {experience.map(item =>
                <div className=' flex justify-between items-center ' key={item._id}>
                    <p>{item.date}</p>
                    <p>{item.name}</p>
                    <p>{item.lieu}</p>
                    <button
                        onClick={() => handleDelete(item._id)}
                        className=' btn btn-sm my-1'>
                        <AiTwotoneDelete color='red' size={24} />
                    </button>
                </div>
            )}
        </div>
    )
}
