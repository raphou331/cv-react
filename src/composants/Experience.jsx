import { useEffect, useState } from "react";

const url = "https://cv-api-1.onrender.com";

export default function Experience() {
    const [experience, setExperience] = useState([]);
    async function fetchExperience() {
        const response = await fetch(`${url}/experience`);
        const data = await response.json();
        setExperience(data);
    }

    useEffect(() => {
        fetchExperience();
    }, []);
    return (
        <div>
            <h2 className="text-3xl mt-3 text-center p-2 bg-red-300 rounded-3xl mb-4">
                EXPERIENCE
            </h2>
            <table className=" w-full ">
                <tbody>
                    {experience.map((experience) => (
                        <tr key={experience._id}>
                            <th className=" p-2 border border-blue-400 flex justify-center items-center gap-4">
                                {experience.date}
                            </th>
                            <td className="p-2 border border-blue-400 text-center">{experience.name}</td>
                            <th className=" p-2 border border-blue-400 flex justify-center items-center gap-4">
                                {experience.lieu}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
