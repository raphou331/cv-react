import React, { useEffect, useState } from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";
import { enqueueSnackbar } from 'notistack';

const url = "https://cv-api-1.onrender.com"

export default function AdminLoisirs() {
    const [loisirs, setLoisirs] = useState([])
    const [skill, setSkill] = useState('')
    const [isAdd, setIsAdd] = useState(false)
    async function fetchLoisirs() {

        const response = await fetch('https://cv-api-1.onrender.com/loisirs')
        const data = await response.json()
        setLoisirs(data)
    }

    useEffect(() => {
        fetchLoisirs()
    }, [])

    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(`https://cv-api-1.onrender.com/loisirs/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar("un loisir a ete supprimée", {
                variant: 'error',
                autoHideDuration: '2000',
                anchorOrigin: {
                    horizontal: "center",
                    vertical: "top"
                }
            })

            console.log(data)
            fetchLoisirs();
        }
    }
    async function handlesave() {
        if (skill !== "") {
            console.log(skill)
            const response = await fetch(`${url}/loisirs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ skill })
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                enqueueSnackbar("un loisir a ete ajouté", {
                    variant: 'success',
                    autoHideDuration: '2000',
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "top"
                    }
                })

                fetchLoisirs()
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
            <p className=' text-3xl my-2 font-semibold text-center'>LOISIRS</p>

            {isAdd === false &&
                <button onClick={addSkill} className=' btn btn-success btn-sm'>Ajouter un loisir</button>
            }
            {isAdd === true &&
                <div className='flex gap-3'>
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)} />
                    <button onClick={handlesave}><TfiSave color='blue' size={35} /></button>
                    <button onClick={handleCancel}><ImCancelCircle color='gray' size={30} /></button>
                </div>}

            {loisirs.map(item =>
                <div className=' flex justify-between items-center ' key={item._id}>
                    <p>{item.skill}</p>
                    <button
                        onClick={() => { handleDelete(item._id) }}
                        className=' btn btn-sm my-1'>
                        <AiTwotoneDelete color='red' size={24} />
                    </button>
                </div>
            )}
        </div>
    )
}
