import React, { useState } from 'react'
import AdminContact from '../composants/admin/AdminContact'
import AdminCompetence from '../composants/admin/AdminCompetence'
import AdminLangues from '../composants/admin/AdminLangues'
import AdminLoisirs from '../composants/admin/AdminLoisirs'
import AdminExperience from '../composants/admin/AdminExperience'
import Login from './Login'
import AdminFormation from '../composants/admin/AdminFormation'



export default function Administrateur() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
        if (username === "boo" && password === "boo") {
            setIsLogged(true);
        }
        else { alert('les identifiants sont incorrects') }
    }

    if (!isLogged) {
        return (
            <Login
                username={username}
                password={password}
                setUsername={(e) => setUsername(e.target.value)}
                setPassword={(e) => setPassword(e.target.value)}
                handleSubmit={handleSubmit} />
        )
    }
    return (
        <div className='flex gap-5'>
            <div className='flex flex-col gap-6 w-[50%] bg-slate-100'>
                <AdminContact />
                <AdminCompetence />

            </div>
            <div className='flex flex-col gap-6 ml-2 w-[50%] bg-slate-100'>
                <AdminLangues />
                <AdminLoisirs />
                <AdminFormation />
                <AdminExperience />
            </div>
        </div>
    )
}
