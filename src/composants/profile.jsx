

export default function profile({ nom, prenom }) {
    return (
        <div className="flex flex-col items-center">
            <img src="./avatare.jpg" alt="" className="w-[300px]" />
            <h2 className="text-4xl sm:text-3xl lg:text-4xl font-semibold mt-12 lg:ml-14">{nom} {prenom}</h2>
        </div>
    )
}
