

export default function Login({ username, password, setUsername, setPassword, handleSubmit }) {
    return (
        <div className=" flex flex-col justify-center h-screen items-center border-8 bg-red-100">
            <div className=" border pt-10 pr-10 pb-10 pl-10 rounded-2xl bg-cyan-100 ">
                <p className=' text-3xl text-center font-bold mb-3 mt-6'>CONNECTION</p>
                <form
                    className=" w-[400px] flex flex-col gap-4 "
                    onSubmit={handleSubmit}>
                    <input className="input input-bordered input-primary w-full"
                        type="text" placeholder="Saisir le nom de l utilisateur"
                        value={username}
                        onChange={setUsername} />

                    <input className="input input-bordered input-primary w-full"
                        type="password" placeholder="Saisir le mot de passe"
                        value={password}
                        onChange={setPassword} />

                    <button className="btn btn-outline btn-info">Se connecter</button>
                </form>
            </div>
        </div>

    )
}
