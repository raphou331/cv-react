import React, { useEffect, useState } from 'react'
import { enqueueSnackbar } from 'notistack';
import { AiTwotoneDelete } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";

const url = "http://localhost:3333"

export default function AdminFormation() {
    const [formation, setFormation] = useState([])
    const [skill, setSkill] = useState('')
    const [annees, setAnnees] = useState('')
    const [diplome, setDiplome] = useState('')
    const [etablissement, setEtablissement] = useState('')
    const [isAdd, setIsAdd] = useState(false)
    async function fetchFormation() {

        const response = await fetch('http://localhost:3333/formation')
        const data = await response.json()
        setFormation(data)
    }

    useEffect(() => {
        fetchFormation()
    }, [])

    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(`http://localhost:3333/formation/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar("une formation a ete supprimée", {
                variant: 'error',
                autoHideDuration: '2000',
                anchorOrigin: {
                    horizontal: "center",
                    vertical: "top"
                }
            })

            console.log(data)
            fetchFormation();
        }
    }
    async function handlesave() {
        if (skill !== "") {
            console.log(skill)
            const response = await fetch(`${url}/formation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ annees, diplome, etablissement })
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                enqueueSnackbar("une formation a ete ajouté", {
                    variant: 'success',
                    autoHideDuration: '2000',
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "top"
                    }
                })

                fetchFormation()
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
            <p className=' text-3xl my-2 font-semibold text-center'>FORMATION</p>

            {isAdd === false &&
                <button onClick={addSkill} className=' btn btn-success btn-sm'>Ajouter une experience</button>
            }
            {isAdd === true &&
                <div className='flex gap-3'>
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={annees}
                        onChange={(e) => setAnnees(e.target.value)} />
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={diplome}
                        onChange={(e) => setDiplome(e.target.value)} />
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={etablissement}
                        onChange={(e) => setEtablissement(e.target.value)} />
                    <button onClick={handlesave}><TfiSave color='blue' size={35} /></button>
                    <button onClick={handleCancel}><ImCancelCircle color='gray' size={30} /></button>
                </div>}

            {formation.map(item =>
                <div className=' flex justify-between items-center ' key={item._id}>
                    <p>{item.annees}</p>
                    <p>{item.diplome}</p>
                    <p>{item.etablissement}</p>
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