import { useEffect, useState } from "react";

const url = "https://cv-api-1.onrender.com";


export default function Formation() {
    const [formation, setFormation] = useState([]);
    async function fetchFormation() {
        const response = await fetch(`${url}/formation`);
        const data = await response.json();
        setFormation(data);
    }

    useEffect(() => {
        fetchFormation();
    }, []);
    return (
        <div>
            <h2 className="text-3xl mt-3 text-center p-2 bg-red-300 rounded-3xl mb-4">
                FORMATION
            </h2>
            <table className=" w-full ">
                <tbody>
                    {formation.map((formation) => (
                        <tr key={formation._id}>
                            <th className=" p-2 border border-blue-700 flex justify-center items-center gap-4">
                                {formation.annees}
                            </th>
                            <td className="p-2 border border-blue-700 text-center">{formation.diplome}</td>
                            <th className=" p-2 border border-blue-700 flex justify-center items-center gap-4">
                                {formation.etablissement}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
