import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul className=' flex justify-center g'>
                <li className=' p-4 right-10 btn btn-outline btn-primary mt-3 text-center mx-2'>
                    <Link to={"/"}>Accueil</Link>
                </li>
                <li className=' p-4 right-10 btn btn-outline btn-secondary mt-3 text-center mx-2'>
                    <Link to={"/Login"}>Login</Link>
                </li>
                <li className=' p-4 right-10 btn btn-outline btn-error mt-3 text-center mx-2'>
                    <Link to={"/Administrateur"}>Administrateur</Link>
                </li>
            </ul>
        </nav>
    )
}
