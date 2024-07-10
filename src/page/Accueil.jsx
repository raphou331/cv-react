import React from 'react'
import Contact from '../composants/Contact'
import Langues from '../composants/Langues'
import Loisirs from '../composants/Loisirs'
import Competence from '../composants/Competence'
import Formation from '../composants/Formation'
import Experience from '../composants/Experience'

export default function Accueil() {
    return (
        <div className='flex gap-3 bg-violet-100 flex-wrap '>
            <div className='flex flex-col p-6 gap-6 w-[40%] max-md:w-full '>
                <Contact />
                <Competence />


            </div>
            <div className='flex flex-col gap-6 w-[55%] max-md:w-full'>
                <Langues />
                <Formation />
                <Experience />
                <Loisirs />
            </div>
        </div>
    )

}
