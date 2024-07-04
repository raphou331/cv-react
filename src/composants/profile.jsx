

export default function profile({ nom, prenom }) {
    return (
        <div className=" text-center">
            <img src="./avatare.jpg" alt="" className="h-[300px] p-10  shadow-lg ml-52 " />
            <h2 className="text-4xl font-semibold mt-12 ml-14">{nom} {prenom}</h2>
        </div>
    )
}
