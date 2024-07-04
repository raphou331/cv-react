import { useEffect, useState } from "react";

const url = "http://localhost:3333";

export default function Langues() {
    const [langues, setLangues] = useState([]);
    async function fetchLangues() {
        const response = await fetch(`${url}/langues`);
        const data = await response.json();
        setLangues(data);
    }

    useEffect(() => {
        fetchLangues();
    }, []);
    return (
        <div>
            <h2 className="text-3xl mt-3 text-center p-2 bg-red-300 rounded-3xl mb-4">
                LANGUES
            </h2>
            <table className=" w-full ">
                <tbody>
                    {langues.map((langue) => (
                        <tr key={langue._id}>
                            <th className=" p-2 border border-blue-400 flex justify-center items-center gap-4">
                                {langue.name}
                                <img className="" src={langue.img}></img>
                            </th>

                            <td className="p-2 border border-blue-400">{langue.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
