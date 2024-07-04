import React from 'react'
import Contact from '../composants/Contact'
import Langues from '../composants/Langues'
import Loisirs from '../composants/Loisirs'
import Competence from '../composants/Competence'
import Formation from '../composants/Formation'
import Experience from '../composants/Experience'

export default function Accueil() {
    return (
        <div className='flex gap-5 bg-violet-100 flex-wrap'>
            <div className='flex flex-col gap-6 ml-10 w-[40%]'>
                <Contact />
                <Competence />


            </div>
            <div className='flex flex-col gap-6 ml-10 w-[50%] mt-40'>
                <Langues />
                <Formation />
                <Experience />
                <Loisirs />
            </div>
        </div>
    )

}
