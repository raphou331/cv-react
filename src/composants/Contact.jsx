
import { useEffect, useState } from 'react'
import Profile from './profile'

export default function Contact() {
    /*  declarer une varaible d état */
    const [contact, setContact] = useState([])
    /*  fonction asyncronne pour recuperer les contact */
    async function getContact() {
        const reponse = await fetch('http://localhost:3333/contact')
        const data = await reponse.json()
        /*  je recupere le premier et le seul element dans mon tableau data avec l index 0 */
        setContact(data)
    }
    useEffect(() => {
        /* j appelle la fonction dans le hook useEffect une seul fois */
        getContact()
    }, [])

    return (
        <div>
            {contact.length > 0 &&
                <div className=' ml-2'>
                    <Profile nom={contact[0].nom} prenom={contact[0].prenom} />
                    <h2 className=' text-3xl mt-3 mb-4 text-center p-2 bg-red-300 rounded-3xl '> CONTACT</h2>
                    <table className='ml-6 mt-6'>
                        <tr>
                            <th>Tel</th>
                            <td>{contact[0].tel}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{contact[0].email}</td>
                        </tr>
                        <tr><th>Adresse</th>
                            <td>{contact[0].adresse}</td>
                        </tr>
                    </table>
                </div>}
        </div>
    )
}