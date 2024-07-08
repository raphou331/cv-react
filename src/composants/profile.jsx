

export default function profile({ nom, prenom }) {
    return (
        <div className="flex flex-col text-center">
            <img src="./avatare.jpg" alt="" className="h-40 w-40 sm:h-60 sm:w-60 lg:h-[300px] p-10  shadow-lg ml-52 " />
            <h2 className="text-4xl sm:text-3xl lg:text-4xl font-semibold mt-12 lg:ml-14">{nom} {prenom}</h2>
        </div>
    )
}
