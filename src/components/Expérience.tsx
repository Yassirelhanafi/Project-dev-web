import { FiArrowRight } from "react-icons/fi";
export {};
export const Expérience = () =>{
    return (
        <div>
            <h2 className="flex justify-left text-xl font-extrabold mb-3 mt-3" >Expérience professionnelle</h2>
            <p><strong>ORANGE</strong> - Software engineer</p>
            <p>03/11/2019 - 25/09/2023</p>
            <ul>
                <li className="flex center-items "><FiArrowRight/>L’estimation du niveau d’effort de développement des User Stories</li>
                <li className="flex center-items "><FiArrowRight/>La définition des spécifications détaillées à partir des User stories</li>
                <li className="flex center-items "><FiArrowRight/>Le support technique et la maintenance corrective</li>
            </ul>
        </div>
    )
}