import { useEffect, useState } from 'react'

export default function Competence() {
    const [competences, setCompetences] = useState([])
    async function fetchCompetence() {
        const response = await fetch('https://cv-api-1.onrender.com/competence')
        const data = await response.json()
        setCompetences(data)
    }


    useEffect(() => {
        fetchCompetence()
    }, [])
    return (
        <div className=' mt-4 ml-2'>
            <h2 className='text-3xl mt-3 text-center p-2 bg-red-300 rounded-3xl'>COMPETENCES</h2>

            {competences.map(item =>
                <div className='flex justify-between items-center'>
                    <p key={item._id}>{item.skill}</p>
                    <img src={item.img} ></img>
                </div>
            )}
        </div>
    )
}
