import { useEffect, useState } from 'react'

const url = "https://cv-api-1.onrender.com"

export default function Loisirs() {
    const [loisirs, setLoisirs] = useState([])
    async function fetchLoisirs() {
        const response = await fetch(`${url}/loisirs`)
        const data = await response.json()
        setLoisirs(data)
    }


    useEffect(() => {
        fetchLoisirs()
    }, [])
    return (
        <div>
            <h2 className='text-3xl mt-3 text-center p-2 bg-red-300 rounded-3xl'>LOISIRS</h2>
            <ul className='ml-6 mt-4 text-center'>{loisirs.map(item => <li key={item._id}>{item.skill}</li>)}
            </ul>
        </div>
    )
}