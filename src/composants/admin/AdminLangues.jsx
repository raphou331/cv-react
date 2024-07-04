import React, { useEffect, useState } from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";
import { enqueueSnackbar } from 'notistack';

const url = "http://localhost:3333"

export default function AdminLangues() {
    const [langues, setLangues] = useState([])
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [img, setImg] = useState('')
    const [isAdd, setIsAdd] = useState(false)
    async function fetchLangues() {

        const response = await fetch('http://localhost:3333/langues')
        const data = await response.json()
        setLangues(data)
    }
    useEffect(() => {
        fetchLangues()
    }, [])
    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(`http://localhost:3333/langues/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar("une langue a ete supprimée", {
                variant: 'error',
                autoHideDuration: '2000',
                anchorOrigin: {
                    horizontal: "center",
                    vertical: "top"
                }
            })

            console.log(data)
            fetchLangues();
        }
    }
    async function handlesave() {
        if (name !== "") {
            console.log(img)
            const response = await fetch(`${url}/langues`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, level, img })
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                enqueueSnackbar("une langue a ete ajouté", {
                    variant: 'success',
                    autoHideDuration: '2000',
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "top"
                    }
                })


                fetchLangues()
                setName('');
            }
        }
    }

    function handleCancel() {
        setIsAdd(false)
    }
    function addName() {
        setIsAdd(true)
    }
    return (
        <div className='ml-2 mt-10 gap-2 mb-2' >

            <p className=' text-3xl my-2 font-semibold text-center'>LANGUES</p>

            {isAdd === false &&
                <button onClick={addName} className=' btn btn-success btn-sm'>Ajouter une langue</button>
            }
            {isAdd === true &&
                <div className='flex gap-3'>

                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <select className='' onChange={(e) => setLevel(e.target.value)}>
                        <option selected hidden value="">choisir le niveau</option>
                        <option value="Debutant">Debutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                        <option value="Maternel">Maternel</option>
                    </select>
                    <input
                        type="text"
                        className="input input-bordered input-primary w-full"
                        value={img}
                        onChange={(e) => setImg(e.target.value)} />

                    <button onClick={handlesave}><TfiSave color='blue' size={35} /></button>
                    <button onClick={handleCancel}><ImCancelCircle color='gray' size={30} /></button>
                </div>}

            {langues.map(item =>
                <div className=' flex justify-between items-center ' key={item._id}>

                    <p>{item.name}<img src={item.img} ></img></p>
                    <p>{item.level}</p>

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
